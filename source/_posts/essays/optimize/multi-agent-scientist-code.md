---
title: Virtual-Scientists 科研创意生成系统代码解读
tags:
  - optimality
  - tsp
  - machine-learning
categories:
  - paper-reading
  - optimization
excerpt: 论文阅读
index_img: /img/reading.jpg
banner_img: /img/reading.jpg
abbrlink: dcc62fc5
date: 2025-12-13 23:29:48
---
## 1. 核心组件及其作用

### A. 虚拟科研生态系统 (数据预处理层)
**目录**: `preprocess_data/`

该部分负责将原始的学术数据（如 AMiner, OAG）转化为系统可用的结构化知识。

#### 1. 原始数据解析与索引构建 (`data_extraction/`)
*   **双向索引建立 (`extract_publication2json.py`)**:
    *   解析原始论文数据，生成 `author2paper.json` 和 `paper2author.json`。
    *   用于快速查询科学家的历史著作或论文的作者。
*   **合作网络提取 (`extract_coauthor2json.py`)**:
    *   解析 `AMiner-Coauthor.txt`，提取作者间的共同发表记录。
    *   计算合作权重（Weight），生成 `author2coauthor.json`，为基于概率的团队组建提供数据。
*   **时空范围筛选 (`extract_data_in_range.py`)**:
    *   **时间过滤**: 根据 `start_time` 和 `end_time` 筛选特定年份范围内的论文和作者。
    *   **活跃度过滤**: 设定阈值（如 `min_paper` 最小发表数、`min_degree` 最小合作者数），保留具有代表性的“虚拟科学家”群体。
    *   **矩阵生成**: 为筛选出的科学家生成 `agentID2authorID.json` 映射表，并构建初始的邻接矩阵。

#### 2. 结构化数据库建设 (`database/`)
系统使用 SQLite 构建 `global_database.db` 数据库，通过 `create_database.py` 实现从原始文本到关系型数据的转换。

*   **`authors` 表 (科学家画像基础)**:
    *   **字段**: `id`, `name`, `affiliations`, `paper_num`, `citation_num`, `h_index`, `p_index`, `up_index`, `topics`。
    *   **解析逻辑**: 使用正则表达式从 `AMiner-Author.txt` 中按行解析以 `#index`, `#n` 等开头的字段。
*   **`papers` 表 (文献库基础)**:
    *   **字段**: `id`, `title`, `authors`, `affiliations`, `year`, `publication_venue`, `paper_references`, `abstract`。
    *   **解析逻辑**:
        *   处理引用关系：将以 `#%` 开头的多行引用 ID 合并为字符串。
        *   摘要处理：将以 `#!` 开头的多行摘要文本进行拼接。
*   **`publications` 表 (作者-论文关联)**:
    *   **字段**: `relation_id`, `author_id`, `paper_id`, `year`。
    *   **作用**: 建立作者与论文的多对多映射，并冗余存储年份信息，以便按时间维度检索。
*   **`coauthors` 表 (合作网络基础)**:
    *   **字段**: `author_id`, `coauthor_id`, `hop_num`, `weight`。
    *   **作用**: 存储科学家之间的直接合作关系及权重。
*   **引用分析增强 (`add_paper_citation_num.py`)**:
    *   **反向计算**: 遍历 `papers` 表中的 `paper_references` 字段，统计每个论文 ID 被引用的次数。
    *   **动态更新**: 将计算出的被引频次作为 `citation_num` 列更新回 `papers` 表。

#### 3. 科学家画像生成
*   系统为每个选定的 Agent 生成一个 `author_x.txt` 文件。
*   该文件通过模板将数据库中的结构化信息转化为自然语言描述。
*   这些文件在 `Platform` 初始化时被加载，成为 `SciAgent` 的 System Prompt。

### B. 多智能体科研平台 (`sci_platform/`)
`Platform` 类负责管理智能体池、知识库以及科研流程的调度。

#### 1. 智能体与环境初始化
*   **双层智能体池**:
    *   **科学家池 (`agent_pool`)**: 初始化 $N$ 个 `SciAgent`。每个智能体的 `sys_prompt` 动态加载自预处理生成的 `author_x.txt`。
    *   **评审员池 (`reviewer_pool`)**: 初始化独立的评审智能体，可使用更高阶的模型配置。
*   **知识库装备 (`KnowledgeBank`)**:
    *   通过 `init_knowledgeBank` 将所有科学家的背景资料索引化。
    *   每个 `SciAgent` 装备该知识库，支持在对话中通过 RAG 检索自己的历史研究细节。
*   **双索引检索系统**:
    *   **`gpu_index`**: 存储“过去”和“当代”的论文，用于 Idea 生成阶段的文献调研。
    *   **`gpu_future_index`**: 存储“未来”或对比组论文，用于新颖性检测阶段。

#### 2. 动态团队组建机制 (`select_coauthors`)
模拟学术合作的逻辑：
*   **自主决策**: Leader 智能体首先判断是否需要合作或独立研究。
*   **基于概率的伙伴选择**:
    *   提取邻接矩阵中该 Leader 对应的行，转化为概率分布。
    *   使用 `np.random.choice` 根据合作历史频率随机挑选 $M$ 个潜在合作伙伴。
*   **邀请与响应**:
    *   向被选中的科学家发送包含 Leader 背景和当前团队构成的邀请函。
    *   被邀请者根据自身研究兴趣和 Leader 的匹配度决定是否加入。
*   **社会网络演化**: 团队组建成功后，成员间的邻接矩阵权重增加 `0.2`，模拟合作关系的强化。

#### 3. 语义文献检索实现 (`reference_paper`)
*   **向量化**: 调用 `ollama` 的 `mxbai-embed-large` 模型将查询语句转化为向量。
*   **高效搜索**: 利用 FAISS 的 GPU 加速索引进行近邻搜索（Top-K）。
*   **上下文注入**: 检索结果被格式化为“标题+摘要”块，注入到智能体的对话上下文中。

#### 4. 周期性演化调度 (`running`)
*   **Epoch 机制**: 系统按 Epoch 循环运行。在每个 Epoch 中，所有活跃团队并行执行其当前状态对应的任务。
*   **状态持久化**: 每个 Epoch 结束时，系统保存最新的论文库和邻接矩阵。

### C. 智能体框架 (`agentscope-main/`)
系统基于 AgentScope 框架定制了 `SciAgent` 类。

#### 1. 检索增强生成 (RAG) 集成
*   **动态检索逻辑**: 在 `prompt_reply` 方法中，智能体将当前输入作为查询，从关联的 `Knowledge` 对象中检索相关文档。
*   **相关性校验**:
    *   设定相似度阈值（如 `0.4`）。
    *   如果检索到的文档得分过低，智能体触发内部的 `CHECKING_PROMPT`，让 LLM 二次判断内容是否相关。
*   **上下文注入**: 检索到的知识以 `Context: [Content]` 的形式注入 Prompt。

#### 2. 记忆与对话管理
*   **多模式回复**: 支持开关 RAG 功能、开关长期记忆及是否将本次对话存入记忆。
*   **自动摘要功能 (`summarize`)**: 能够结合历史背景对长对话进行压缩。该功能在 `Team` 类的多轮讨论中被调用，用于解决上下文窗口限制。

#### 3. 消息格式化与角色扮演
*   **`format_msg`**: 处理单条消息或消息序列，将其统一转化为模型可识别的格式。
*   **系统提示词持久化**: 智能体的“专业背景”通过 `sys_prompt` 锁定。


## 2. 团队协作状态机流程解析

核心逻辑位于 `sci_team/SciTeam.py` 的 `Team` 类中。它通过状态机管理科研协作的生命周期，状态流转顺序为：`WAIT (1) -> TOPIC (2) -> IDEA (3) -> CHECK (4) -> ABSTRACT (5) -> REVIEW (6) -> FINISH (7)`。

### A. 核心协作方法：`group_discuss`
这是所有协作阶段共用的方法：
*   **多轮迭代**: 默认进行 `group_max_discuss_iteration` 轮讨论。
*   **上下文构造**: 每一轮发言动态拼接：团队历史总结 + 当前讨论总结 + 轮次内发言记录。
*   **外部专家邀请机制**: 实时解析发言内容。若智能体提到特定科学家，系统会调用 `Platform` 邀请该专家加入讨论。
*   **自动总结**: 每一轮结束，Leader 对本轮内容进行 `summarize`，摘要存入 `dialogue_history`。

### B. 各阶段实现细节

#### 1. 选题阶段 (`select_topic`)
*   **头脑风暴**: 成员基于自身背景提出研究方向。
*   **就绪检查**: Leader 询问成员是否准备好选定主题。收到 `Action 1` 或达到讨论轮次上限后进入下一步。
*   **主题提取**: Leader 从讨论中提取精炼的 `Topic` 字符串。

#### 2. 创意生成与择优 (`generate_idea`)
*   **检索增强**: 根据 `Topic` 从 FAISS 库检索 $N$ 篇相关论文摘要注入上下文。
*   **指标化评估**: 智能体提出的 Idea 必须包含 `Clarity`、`Feasibility` 和 `Novelty` 三个维度的自评得分。
*   **迭代比较**: 系统会比较新旧 Idea 的综合得分（新颖性权重翻倍）。如果新 Idea 更好，则替换。若所有指标均达到高分（如 >11），则提前终止。

#### 3. 新颖性盲审投票 (`check_novelty`)
*   **查新检索**: 针对候选 Idea 的标题进行文献检索。
*   **模拟盲审**: 团队成员阅读 Idea 描述及检索到的相关文献，通过 `most_frequent_element` 算法统计投票结果，选出最具创新性的 Idea。

#### 4. 摘要撰写与相似度校验 (`generate_abstract`)
*   **草案撰写**: 协作生成标准学术摘要。
*   **双重相似度校验**:
    *   **向量距离**: 计算与库中论文的余弦相似度。
    *   **LLM 判别**: 调用 Prompt 让智能体对比“生成的摘要”与“检索到的最相似摘要”。
*   **退回机制**: 如果 LLM 判定相似度得分 $\ge 70$，系统将摘要标记为“不可用”，并根据状态记录决定退回修改或重新生成 Idea。

#### 5. 外部评审与成果转化 (`generate_review`)
*   **独立评审**: 由 `reviewer_pool` 执行。评审员根据 `Overall` 等指标打分。
*   **录取逻辑**: 若平均分 $\ge 5$，论文被“接收”。
*   **生态反馈**:
    *   **论文入库**: 标题、摘要、作者、引用关系被存入数据库。
    *   **索引更新**: 计算新摘要的 Embedding 并加入 FAISS 索引。
    *   **关系加强**: 成员间的合作权重增加。


## 3. Virtual-Scientists v2 版本改进说明

`Virtual-Scientists-v2` 版本在扩展性、性能及模拟真实度上进行了改进。

### A. 支撑百万级智能体模拟
*   **异步并发架构**: 采用 `asyncio` 异步框架，并行执行团队任务。
*   **推理管理系统 (`InferencerManager`)**: 引入了推理管理器，支持跨多个 IP 和端口调度模型请求，实现负载均衡。
*   **底层框架迁移**: 从 AgentScope 迁移到 **CAMEL** 框架。

### B. 性能与效率优化
*   **`sci_platform_fast.py`**: 重新设计平台调度逻辑，减少同步等待。
*   **高效向量检索**: 优化 FAISS 索引，支持在大规模数据集上进行检索。

### C. 模拟策略
*   **团队组织模型**: 增加 `uniform`、`gaussian`、`exponential` 等多种团队组建分布策略。
*   **探索策略**: 科学家可采用不同的探索模式（如基于历史兴趣或随机探索）。
*   **Leader 选定模式**: 支持多种 Leader 选定机制。

### D. 系统鲁棒性与持久化
*   **Checkpoint 机制**: 增加状态保存与加载功能，支持实验中断后恢复。
*   **结构化存储**: 引入更规范的数据库存储方案。

### E. 数据集扩展
*   **OAG 数据集支持**: 支持 **Open Academic Graph (OAG)** 数据集。