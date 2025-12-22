/**
 * 保护数学公式，禁用 Markdown 对公式区域的解析
 * 思路：在 Markdown 渲染前，将公式替换为行内代码占位符
 * Markdown 不会处理行内代码内容，渲染后再恢复公式
 */

const formulaStorage = new Map();

hexo.extend.filter.register('before_post_render', function (data) {
    const fileKey = data.source || 'default';
    const formulas = [];

    let content = data.content;

    // 先保护 $$...$$ 块公式
    content = content.replace(/\$\$([\s\S]*?)\$\$/g, function (match) {
        const index = formulas.length;
        // 去除公式内部的换行符，替换为空格，避免渲染错误
        const cleanedFormula = match.replace(/\r?\n/g, ' ');
        formulas.push(cleanedFormula);
        // 使用特殊标记，确保不会与正常代码混淆
        return `MATHBLOCK_PLACEHOLDER_${index}_ENDMARK`;
    });

    // 再保护 $...$ 行内公式
    content = content.replace(/\$([^\$\n]+?)\$/g, function (match) {
        const index = formulas.length;
        formulas.push(match);
        return `MATHINLINE_PLACEHOLDER_${index}_ENDMARK`;
    });

    formulaStorage.set(fileKey, formulas);
    data.content = content;

    return data;
});

hexo.extend.filter.register('after_post_render', function (data) {
    const fileKey = data.source || 'default';
    const formulas = formulaStorage.get(fileKey);

    if (!formulas) return data;

    let content = data.content;

    // 恢复所有公式
    formulas.forEach(function (formula, index) {
        // 注意：after_post_render 时内容已经是 HTML
        // 占位符可能被包裹在 <p> 标签中
        const blockPlaceholder = `MATHBLOCK_PLACEHOLDER_${index}_ENDMARK`;
        const inlinePlaceholder = `MATHINLINE_PLACEHOLDER_${index}_ENDMARK`;

        // 全局替换
        content = content.split(blockPlaceholder).join(formula);
        content = content.split(inlinePlaceholder).join(formula);
    });

    formulaStorage.delete(fileKey);
    data.content = content;

    return data;
});
