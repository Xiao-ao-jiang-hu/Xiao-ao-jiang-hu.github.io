---
title: DWARF段解析
tags:
  - no tags
categories:
  - uncategorized
excerpt: no excerpt
date: 2025-08-14 16:05:24
---
## 为什么ELF中需要这一段

### 从一次段错误说起  
   想像你正在写这样一段 C 代码：

   ```c
   int main() {
       int *p = NULL;
       *p = 42;          /* 这里会崩 */
       return 0;
   }
   ```

   编译运行：

   ```
    wst@WST ~> g++ -g hello.c                                                                                        (base)
    wst@WST ~> ./a.out                                                                                               (base)
    fish: Job 1, './a.out' terminated by signal SIGSEGV (Address boundary error)
   ```

   用 gdb 调试：

   ```
   (gdb) run
   [Thread debugging using libthread_db enabled]
    Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".

    Program received signal SIGSEGV, Segmentation fault.
    0x000055555555513d in main () at hello.c:3
    3              *p = 42;          /* 这里会崩 */
   ```

   问题来了：  
   - gdb 为什么知道崩溃地址 0x000055555555513d 对应的是 hello.c 第 3 行？  
   - 更进一步，`bt` 怎么把栈回溯成人类可读的函数名、行号、参数？

### “-g” 背后的故事  
   把源码变成可执行文件，通常经历：

   ```
   源码(.c/.cpp) ──(前端)──► AST ──(中端)──► IR ──(后端)──► 机器码
                          │
                          └──► DWARF 调试信息
   ```

   当你加 `-g` 时，编译器在生成机器码的同时，会额外产出一张“地图”：  
   - 地址 ↔ 行号（行表）  
   - 地址 ↔ 函数、变量、类型（DIE 树）  
   - 栈帧如何回退（CFI）  
   - 宏、内联、模板实例化……

   这些调试信息被塞进一组以 `.debug_` 开头的 ELF section 里，格式规范就是 DWARF（Debugging With Attributed Record Formats）。

### DWARF 名称的来历与版本简史  
   - 最早在 1988 年由 Bell Labs 的 UNIX 系统引入，用来取代 stabs 格式。  
   - 名字借用了《白雪公主》里七个小矮人（Dwarf），暗示“小巧却功能齐全”。  
   - 版本演进：  
     DWARF1（1992） → DWARF2（1993，ELF 通用） → DWARF3（2006，支持更多语言） → DWARF4（2010，压缩/类型单元） → DWARF5（2017，索引、字符串池、Split-DWARF）。  
   - 今天 Linux、*BSD、macOS、甚至 WebAssembly 上，DWARF 都是事实标准。


## ELF 视角：DWARF 在可执行文件中的存在形态  

在 ELF 的语境下，DWARF 调试信息并非以单一连续区域出现，而是以一组具有严格命名约定的 section 为核心载体。

### section 的枚举  
   使用 GNU binutils 提供的 readelf 工具，可直接枚举目标文件的所有 section：  

   ```
   wst@WST ~> readelf -S a.out                                                                                      (base)
There are 34 section headers, starting at offset 0x3878:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .interp           PROGBITS         0000000000000318  00000318
       000000000000001c  0000000000000000   A       0     0     1
  [ 2] .note.gnu.pr[...] NOTE             0000000000000338  00000338
       0000000000000030  0000000000000000   A       0     0     8
  [ 3] .note.gnu.bu[...] NOTE             0000000000000368  00000368
       0000000000000024  0000000000000000   A       0     0     4
  
  ......

  [23] .data             PROGBITS         0000000000004000  00003000
       0000000000000010  0000000000000000  WA       0     0     8
  [24] .bss              NOBITS           0000000000004010  00003010
       0000000000000008  0000000000000000  WA       0     0     1
  [25] .comment          PROGBITS         0000000000000000  00003010
       0000000000000023  0000000000000001  MS       0     0     1
  [26] .debug_aranges    PROGBITS         0000000000000000  00003033
       0000000000000030  0000000000000000           0     0     1
  [27] .debug_info       PROGBITS         0000000000000000  00003063
       000000000000006b  0000000000000000           0     0     1
  [28] .debug_abbrev     PROGBITS         0000000000000000  000030ce
       0000000000000055  0000000000000000           0     0     1
  [29] .debug_line       PROGBITS         0000000000000000  00003123
       0000000000000047  0000000000000000           0     0     1
  [30] .debug_str        PROGBITS         0000000000000000  0000316a
       00000000000000a6  0000000000000001  MS       0     0     1
  [31] .symtab           SYMTAB           0000000000000000  00003210
       0000000000000348  0000000000000018          32    18     8
  [32] .strtab           STRTAB           0000000000000000  00003558
       00000000000001cd  0000000000000000           0     0     1
  [33] .shstrtab         STRTAB           0000000000000000  00003725
       000000000000014c  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), I (info),
  L (link order), O (extra OS processing required), G (group), T (TLS),
  C (compressed), x (unknown), o (OS specific), E (exclude),
  D (mbind), l (large), p (processor specific)
   ```

   上述输出表明，DWARF 调试信息由以 `.debug_` 为前缀的若干 PROGBITS 类型 section 承载。每个 section 在文件中有独立的偏移与长度，于链接阶段可被合并或拆分，但彼此逻辑上紧密关联。

### section 与 segment 的区分  
   在 ELF 规范中，section 用于描述“链接视图”，而 segment（程序头部表项，Program Header）描述“执行视图”。调试信息 section 通常带有 `SHF_ALLOC` 以外的标志，因此默认不会被映射到进程地址空间。换言之：

   - section 是静态分析（链接、调试）的粒度；  
   - segment 是运行时（加载、执行）的粒度。  

   除非显式使用 `--build-id` 与 `.note.gnu.build-id` 机制，将调试信息单独存放并通过 `.gnu_debuglink` 引用，否则生产环境的可执行文件往往通过 `strip` 移除 `.debug_*` section，以减小体积。

3. DWARF section 概览  
   依照 DWARF 标准，调试信息可划分为以下主要类别：

   a) 核心调试描述  
      .debug_info      —— 调试信息条目（DIE）的主要容器  
      .debug_abbrev    —— 对应 DIE 的缩写表（Abbreviation Table）  
      .debug_line      —— 行号与地址映射表  
      .debug_frame     —— 调用帧信息（Call Frame Information, CFI）  
      .debug_loc       —— 位置列表（Location Lists）  
      .debug_ranges    —— 地址范围列表  
      .debug_str       —— 字符串池（String Table）

   b) 索引与加速访问  
      .debug_aranges   —— 地址与编译单元（CU）的映射  
      .debug_pubnames  —— 全局对象名称索引（已逐步被 DWARF5 取代）  
      .debug_pubtypes  —— 全局类型名称索引  
      .debug_names     —— DWARF5 引入的统一名称索引  
      .gdb_index       —— GNU 扩展，为 gdb 提供启动加速

   c) 分离式调试（Split DWARF）  
      .debug_types     —— DWARF4 类型单元（已合并至 DWARF5 的 .debug_info）  
      .debug_cu_index  —— DWARF5 编译单元索引  
      .debug_tu_index  —— DWARF5 类型单元索引  
      .dwo             —— 单独的调试对象文件（DWARF Object）

   这些 section 通过标签化、索引化、压缩化等机制，共同构成一套层次清晰、可扩展、可剪裁的调试信息体系。下一部分将逐一对每个 section 的语法结构与语义细节展开剖析。


## DWARF 语法与语义详解
### .debug_abbrev

#### 该段的作用  
.debug_abbrev 为 .debug_info 中所有调试信息条目（DIE）提供“模板”。它只存放结构：每个 DIE 属于什么类型（tag）、是否包含子节点、拥有哪些属性、这些属性以何种数据格式（form）存放。如此可避免在 .debug_info 中重复描述字段。

#### 示例程序  
```c
/* demo.c */
int add(int a, int b) {
    return a + b;
}
```
编译命令：  
```bash
gcc -g -c demo.c -o demo.o
```

#### 解析命令和解析结果  
```bash
readelf --debug-dump=abbrev demo.o
```
输出：
```
Contents of the .debug_abbrev section:

  Number TAG (0)
   1      DW_TAG_compile_unit    [has children]
    DW_AT_producer     DW_FORM_strp
    DW_AT_language     DW_FORM_data1
    DW_AT_name         DW_FORM_strp
    DW_AT_comp_dir     DW_FORM_strp
    DW_AT_low_pc       DW_FORM_addr
    DW_AT_high_pc      DW_FORM_data8
    DW_AT_stmt_list    DW_FORM_sec_offset
    DW_AT value: 0     DW_FORM value: 0
   2      DW_TAG_subprogram    [has children]
    DW_AT_external     DW_FORM_flag_present
    DW_AT_name         DW_FORM_string
    DW_AT_decl_file    DW_FORM_data1
    DW_AT_decl_line    DW_FORM_data1
    DW_AT_decl_column  DW_FORM_data1
    DW_AT_prototyped   DW_FORM_flag_present
    DW_AT_type         DW_FORM_ref4
    DW_AT_low_pc       DW_FORM_addr
    DW_AT_high_pc      DW_FORM_data8
    DW_AT_frame_base   DW_FORM_exprloc
    DW_AT_GNU_all_call_sites DW_FORM_flag_present
    DW_AT_sibling      DW_FORM_ref4
    DW_AT value: 0     DW_FORM value: 0
   3      DW_TAG_formal_parameter    [no children]
    DW_AT_name         DW_FORM_string
    DW_AT_decl_file    DW_FORM_data1
    DW_AT_decl_line    DW_FORM_data1
    DW_AT_decl_column  DW_FORM_data1
    DW_AT_type         DW_FORM_ref4
    DW_AT_location     DW_FORM_exprloc
    DW_AT value: 0     DW_FORM value: 0
   4      DW_TAG_base_type    [no children]
    DW_AT_byte_size    DW_FORM_data1
    DW_AT_encoding     DW_FORM_data1
    DW_AT_name         DW_FORM_string
    DW_AT value: 0     DW_FORM value: 0
```

#### 分析
- “Number 1” 对应编译单元（DW_TAG_compile_unit）。  
  - “has children” 表明它下面会挂子 DIE（例如函数、变量）。  
  - 属性列表给出了编译器、语言类型、源文件名、目录、代码起止地址、行号表偏移等。  

- “Number 2” 对应子程序（DW_TAG_subprogram），即函数 add。  
  - 属性提供了函数名、声明文件/行/列、函数签名、返回类型、函数体地址范围以及计算帧基址的表达式。  

.debug_abbrev 不直接存放上述字符串或地址，而是规定“此处应有一个 DW_FORM_strp 的字符串，此处应有一个 DW_FORM_addr 的地址”，真正的数据全部放在 .debug_info 中，解析器只需按“模板”顺序读取即可。


### .debug_info

#### 该段的作用  
.debug_info 存放构成调试信息树的所有 DIE（Debugging Information Entry）。每个 DIE 由 abbrev code 指向 .debug_abbrev 中的模板，随后按模板给出的属性顺序和格式，依次存储属性值。通过这些 DIE，调试器可在运行时把机器地址映射到源文件位置、变量名、类型描述及作用域层级。

#### 示例程序  
同上

#### 解析命令和解析结果  
```bash
readelf --debug-dump=info demo.o
```
输出：  
```
 Contents of the .debug_info section:

  Compilation Unit @ offset 0:
   Length:        0x6e (32-bit)
   Version:       4
   Abbrev Offset: 0
   Pointer Size:  8
 <0><b>: Abbrev Number: 1 (DW_TAG_compile_unit)
    <c>   DW_AT_producer    : (indirect string, offset: 0x11): GNU C17 10.5.0 -mtune=generic -march=x86-64 -g -fasynchronous-unwind-tables -fstack-protector-strong -fstack-clash-protection -fcf-protection
    <10>   DW_AT_language    : 12       (ANSI C99)
    <11>   DW_AT_name        : (indirect string, offset: 0xa): demo.c
    <15>   DW_AT_comp_dir    : (indirect string, offset: 0): /home/wst
    <19>   DW_AT_low_pc      : 0
    <21>   DW_AT_high_pc     : 0x18
    <29>   DW_AT_stmt_list   : 0
 <1><2d>: Abbrev Number: 2 (DW_TAG_subprogram)
    <2e>   DW_AT_external    : 1
    <2e>   DW_AT_name        : add
    <32>   DW_AT_decl_file   : 1
    <33>   DW_AT_decl_line   : 1
    <34>   DW_AT_decl_column : 5
    <35>   DW_AT_prototyped  : 1
    <35>   DW_AT_type        : <0x6a>
    <39>   DW_AT_low_pc      : 0
    <41>   DW_AT_high_pc     : 0x18
    <49>   DW_AT_frame_base  : 1 byte block: 9c         (DW_OP_call_frame_cfa)
    <4b>   DW_AT_GNU_all_call_sites: 1
    <4b>   DW_AT_sibling     : <0x6a>
 <2><4f>: Abbrev Number: 3 (DW_TAG_formal_parameter)
    <50>   DW_AT_name        : a
    <52>   DW_AT_decl_file   : 1
    <53>   DW_AT_decl_line   : 1
    <54>   DW_AT_decl_column : 13
    <55>   DW_AT_type        : <0x6a>
    <59>   DW_AT_location    : 2 byte block: 91 6c      (DW_OP_fbreg: -20)
 <2><5c>: Abbrev Number: 3 (DW_TAG_formal_parameter)
    <5d>   DW_AT_name        : b
    <5f>   DW_AT_decl_file   : 1
    <60>   DW_AT_decl_line   : 1
    <61>   DW_AT_decl_column : 20
    <62>   DW_AT_type        : <0x6a>
    <66>   DW_AT_location    : 2 byte block: 91 68      (DW_OP_fbreg: -24)
 <2><69>: Abbrev Number: 0
 <1><6a>: Abbrev Number: 4 (DW_TAG_base_type)
    <6b>   DW_AT_byte_size   : 4
    <6c>   DW_AT_encoding    : 5        (signed)
    <6d>   DW_AT_name        : int
 <1><71>: Abbrev Number: 0
```

#### 分析  
- 偏移 0x0 的 DIE 对应编译单元（DW_TAG_compile_unit）。  
  - 通过 abbrev 1 可知其属性顺序：DW_AT_producer 给出编译器版本；DW_AT_language 标识语言为 C99；DW_AT_name 与 DW_AT_comp_dir 共同确定了源文件完整路径；DW_AT_low_pc / DW_AT_high_pc 描述本 CU 机器码地址范围（此处为 0x0–0x18）；DW_AT_stmt_list 指向 .debug_line 的行号表。  

- 偏移 0x2d 的 DIE 对应函数 add（DW_TAG_subprogram）。  
  - abbrev 2 指定其属性：  
    • DW_AT_name 指向字符串表中的 “add”；  
    • DW_AT_decl_file / DW_AT_decl_line 指出函数定义在 demo.c 第 1 行；  
    • DW_AT_prototyped = 1 表示函数有原型；  
    • DW_AT_type = <0x6a> 表示返回值类型 DIE 位于同一 CU 偏移 0x6a；  
    • DW_AT_low_pc / DW_AT_high_pc 给出函数体机器码范围 0x0–018；  
    • DW_AT_frame_base 在 DWARF 操作码中，0x9c 对应 DW_OP_call_frame_cfa，说明使用调用帧的CFA作为帧基址。  

- 偏移 0x4f 的 DIE 对应形参 a（DW_TAG_formal_parameter）。  
  - abbrev 3 指定属性：  
    • DW_AT_name = “a”；  
    • DW_AT_decl_file / DW_AT_decl_line 指出其在 demo.c 第 1 行；  
    • DW_AT_type = <0x6a> 指向返回值类型 DIE；  
    • DW_AT_location 使用 DW_OP_fbreg 操作码，表示该参数在帧基址下偏移 -20 字节。


### .debug_line

#### 该段的作用  
.debug_line 以状态机方式记录“机器地址 ↔ 源文件行列”的精确对应关系，并提供语句边界、基本块、函数序言/结尾等标记。调试器借此在断点、崩溃或单步时，将任意指令地址转换为人类可读的源位置，反之亦然。

#### 示例程序  
同上

#### 解析命令和解析结果  
```bash
readelf --debug-dump=decodedline demo.o
```
典型输出（节选，行号→地址）：  
```
Contents of the .debug_line section:

CU: demo.c:
File name                        Line number    Starting address    View    Stmt
demo.c                                     1                   0               x
demo.c                                     2                 0xe               x
demo.c                                     3                0x16               x
demo.c                                     -                0x18
```

#### 分析  
- 第一条记录：demo.c 第 1 列 0 → 地址 0x0，is_stmt 标记说明这是“推荐断点”位置（函数入口）。  
- 第二条记录：demo.c 第 2 列 0xe → 地址 0xe，is_stmt 标记说明这是“推荐断点”位置（函数体开始）。  
- 第三条记录：demo.c 第 3 列 0x16 → 地址 0x16，is_stmt 标记说明这是“推荐断点”位置（函数体结束）。  
- 第四条记录：demo.c 第 3 列 - → 地址 0x18，is_stmt 标记为 false，表示这是函数结尾（return 语句）位置，不建议设置断点。

### .debug_frame / .eh_frame

#### 该段的作用  
.debug_frame 与 .eh_frame 以统一的 CIE/FDE 表格式描述“如何在运行时从任意指令地址回退到上一栈帧”。  
• 调试器：崩溃时生成回溯 (backtrace)。  
• 采样剖析器：如 perf，依赖 CFI 做无帧指针回溯。  
• 异常机制：C++ throw 或 Rust panic 展开栈帧，同样复用 .eh_frame。

#### 解析命令和解析结果  
```bash
readelf --debug-dump=frames demo.o
```
典型输出（节选）：
```
Contents of the .eh_frame section:


00000000 0000000000000014 00000000 CIE
  Version:               1
  Augmentation:          "zR"
  Code alignment factor: 1
  Data alignment factor: -8
  Return address column: 16
  Augmentation data:     1b
  DW_CFA_def_cfa: r7 (rsp) ofs 8
  DW_CFA_offset: r16 (rip) at cfa-8
  DW_CFA_nop
  DW_CFA_nop

00000018 000000000000001c 0000001c FDE cie=00000000 pc=0000000000000000..0000000000000018
  DW_CFA_advance_loc: 5 to 0000000000000005
  DW_CFA_def_cfa_offset: 16
  DW_CFA_offset: r6 (rbp) at cfa-16
  DW_CFA_advance_loc: 3 to 0000000000000008
  DW_CFA_def_cfa_register: r6 (rbp)
  DW_CFA_advance_loc: 15 to 0000000000000017
  DW_CFA_def_cfa: r7 (rsp) ofs 8
  DW_CFA_nop
  DW_CFA_nop
  DW_CFA_nop
```

#### 分析 
- CIE（Common Information Entry）  
  - 起始地址 0x0，长度 0x14，提供公共规则：  
    - 帧基址寄存器为 rbp，偏移 16；  
    - 返回地址保存于偏移 -16(rbp)。  

- FDE（Frame Description Entry）  
  – 起始地址 0x18，长度 0x10，关联同一 CIE；  
  – pc 范围 0x0–018 恰好覆盖 add 函数全部指令；  
  – 在函数序言后 4 字节处，通过 DW_CFA_def_cfa rsp, 8 将帧基址切换为 rsp+8，实现无帧指针回溯。  

调试器或异常运行时，若采样到地址 0x7（位于 add 函数中部），即可按上述规则恢复前一栈帧的 rbp、rip，从而生成可信的回溯链。