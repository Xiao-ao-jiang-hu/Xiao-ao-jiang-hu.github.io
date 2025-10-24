/**
 * 修复 MathJax 渲染问题 - 在渲染后修复反斜杠
 * hexo-renderer-marked 会将数学公式中的 \\ 转义为 \
 * 这会破坏矩阵环境和其他需要换行的环境
 */

hexo.extend.filter.register('after_post_render', function (data) {
    // 定义所有需要修复反斜杠的 LaTeX 环境
    const environments = [
        // 矩阵环境
        'matrix', 'pmatrix', 'bmatrix', 'vmatrix', 'Bmatrix', 'Vmatrix',
        // 对齐环境
        'aligned', 'align', 'alignat', 'gather', 'multline',
        // 数组和表格
        'array', 'eqnarray',
        // 分段函数
        'cases', 'dcases',
        // 交换图
        'CD',
        // 其他
        'split'
    ];

    // 为每个环境修复反斜杠
    environments.forEach(function (env) {
        const regex = new RegExp('\\\\begin\\{' + env + '\\}([\\s\\S]*?)\\\\end\\{' + env + '\\}', 'g');
        data.content = data.content.replace(regex, function (match, content) {
            // 将 "\ " 或 "\<" 或 "\&" 替换为 "\\ "
            // 注意：要避免已经是 \\ 的情况
            let fixed = content.replace(/([^\\])(\\)(\s|&|<)/g, '$1\\\\$3');
            return '\\begin{' + env + '}' + fixed + '\\end{' + env + '}';
        });
    });

    return data;
});
