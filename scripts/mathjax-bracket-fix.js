/**
 * 修复 \[...\] 和 \(...\) 语法
 * hexo-renderer-marked 会将 \[ 和 \] 转义，导致无法被 mathjax 识别
 * 我们需要在渲染之前将它们转换为 $$ ... $$ 形式
 */

hexo.extend.filter.register('before_post_render', function (data) {
    const { content } = data;

    // 将 \[...\] 转换为 $$...$$
    // 注意：这里需要非贪婪匹配，并且要处理多行
    let processed = content.replace(/\\\[([\s\S]*?)\\\]/g, function (match, formula) {
        return '$$' + formula + '$$';
    });

    // 将 \(...\) 转换为 $...$
    processed = processed.replace(/\\\(([\s\S]*?)\\\)/g, function (match, formula) {
        return '$' + formula + '$';
    });

    data.content = processed;
    return data;
}, 0); // 优先级设为0，确保在marked渲染之前执行
