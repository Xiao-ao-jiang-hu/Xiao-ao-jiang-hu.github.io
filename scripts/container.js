
/**
 * Custom container support for Hexo
 * Converts ::: type [title] ... ::: to {% note type %} ... {% endnote %}
 * Converts !!! type [title] ... (indented) to {% note type %} ... {% endnote %}
 * 
 * Supported types in Fluid theme: primary, secondary, success, danger, warning, info, light
 */
hexo.extend.filter.register('before_post_render', function (data) {
    // 0. 强力修复 tikz 代码块头部的奇怪字符
    // 匹配 ``` 开头，后面跟着任意非换行字符（可能包含零宽空格等），只要包含 tikz，就规范化为 ```tikz
    data.content = data.content.replace(/^```[^\n]*tikz[^\n]*/gm, '```tikz');

    // 简单的代码块保护：```...``` 和 `...`
    const codeBlockRegex = /(```[\s\S]*?```|`[^`\n]+`)/g;
    const placeholders = [];

    // 1. 替换代码块为占位符，防止误伤
    let content = data.content.replace(codeBlockRegex, function (match) {
        // 排除 tikz 代码块，让 hexo-filter-tikzjax 能处理它
        if (/^```\s*tikz/.test(match)) {
            return match;
        }
        const id = `__CODE_BLOCK_${placeholders.length}__`;
        placeholders.push(match);
        return id;
    });

    // 辅助函数：解析类型
    function resolveType(type) {
        type = type.trim().toLowerCase();
        if (type === 'tip') return 'success';
        if (type === 'error') return 'danger';
        if (type === 'warning') return 'warning'; // 容错用户的拼写
        if (type === 'note') return 'info';       // 将 note 映射为 info
        if (type === 'failure') return 'danger';  // 增加 failure 别名映射到 danger
        return type;
    }

    // 辅助函数：生成最终内容
    function generateNote(type, title, innerContent) {
        type = resolveType(type);
        title = title ? title.trim() : '';
        innerContent = innerContent.trim();

        let finalContent = innerContent;
        if (title) {
            finalContent = `**${title}**\n\n${innerContent}`;
        }
        return `{% note ${type} %}\n${finalContent}\n{% endnote %}`;
    }

    // 2. 替换 ::: 语法
    // 匹配 ::: type [title] \n content \n :::
    const containerRegex = /^:::\s*(\w+)\s*(.*)$([\s\S]*?)^:::/gm;
    content = content.replace(containerRegex, function (match, type, title, innerContent) {
        return generateNote(type, title, innerContent);
    });

    // 3. 替换 !!! 语法 (Python-Markdown Admonition style)
    // 匹配 !!! type [title] \n (indented content)
    const admonitionRegex = /^!!!\s+([\w\-]+)(?:[ \t]+(.*))?(?:\r?\n)((?:(?: {4}|\t).*(?:\r?\n|$)|(?:[ \t]*\r?\n))+)/gm;

    content = content.replace(admonitionRegex, function (match, type, title, body) {
        // 去除每行的缩进 (4空格或Tab)
        const innerContent = body.replace(/^(?: {4}|\t)/gm, '');
        return generateNote(type, title, innerContent) + '\n';
    });

    // 4. 还原代码块
    content = content.replace(/__CODE_BLOCK_(\d+)__/g, function (match, id) {
        return placeholders[parseInt(id)];
    });

    data.content = content;
    return data;
}, 0);
