/* 代码块折叠/展开 */
(function () {
    function initCodeToggle() {
        document.querySelectorAll('figure.highlight').forEach(function (figure) {
            if (figure.dataset.toggleInited) return;
            figure.dataset.toggleInited = '1';

            // 获取语言标签（Fluid 主题在 figure 上用 class 标注语言）
            const langClass = Array.from(figure.classList).find(c => c !== 'highlight');
            const lang = langClass ? langClass.toUpperCase() : 'CODE';

            // 获取代码内容区域
            const codeWrap = figure.querySelector('table') || figure.querySelector('pre');
            if (!codeWrap) return;

            // 创建 header 条
            const header = document.createElement('div');
            header.className = 'code-toggle-header';
            header.innerHTML =
                '<span class="code-toggle-lang">' + lang + '</span>' +
                '<span class="code-toggle-hint collapsed-hint">▶&nbsp;&nbsp;点击展开</span>' +
                '<button class="code-toggle-expand-btn">▼&nbsp;收起</button>';

            figure.insertBefore(header, figure.firstChild);

            // 默认收起
            figure.classList.add('code-collapsed');

            // 收起状态：点击整个 header 展开
            header.addEventListener('click', function (e) {
                if (!figure.classList.contains('code-collapsed')) return;
                figure.classList.remove('code-collapsed');
                figure.classList.add('code-expanded');
            });

            // 展开状态：点击收起按钮
            const expandBtn = header.querySelector('.code-toggle-expand-btn');
            expandBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                figure.classList.remove('code-expanded');
                figure.classList.add('code-collapsed');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCodeToggle);
    } else {
        initCodeToggle();
    }
})();
