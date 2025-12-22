
// 1. 注入 MathJax 配置，确保渲染后的 HTML 节点携带原始 TeX 源码
const mathJaxConfig = `
<script>
  (function() {
    var config = window.MathJax || {};
    window.MathJax = config;
    if (!config.options) config.options = {};
    if (!config.options.renderActions) config.options.renderActions = {};
    // 添加自定义动作：渲染完成后将 TeX 源码存入 data-tex 属性
    config.options.renderActions.addTexData = [200, function(doc) {
      for (var i = 0; i < doc.math.length; i++) {
        var math = doc.math[i];
        var node = math.typesetRoot;
        if (node) {
          node.setAttribute('data-tex', math.math);
          node.setAttribute('data-display', math.display);
        }
      }
    }, ''];
  })();
</script>
`;

hexo.extend.injector.register('head_end', mathJaxConfig, 'post');
hexo.extend.injector.register('head_end', mathJaxConfig, 'page');

// 2. 注入复制拦截脚本，处理选中内容的转换
const copyScript = `
<script>
  (function() {
    function getMarkdown(node) {
      if (node.nodeType === 3) return node.textContent; // 文本节点
      if (node.nodeType !== 1) return '';

      var tag = node.tagName;
      
      // 处理 MathJax 公式
      if (tag === 'MJX-CONTAINER' || node.hasAttribute('data-tex')) {
        var tex = node.getAttribute('data-tex');
        var isDisplay = node.getAttribute('data-display') === 'true';
        return isDisplay ? '\\n$$\\n' + tex + '\\n$$\\n' : '$' + tex + '$';
      }

      // 处理代码块
      if (tag === 'PRE') return '\\n\`\`\`\\n' + node.innerText + '\\n\`\`\`\\n';
      if (tag === 'CODE' && node.parentElement.tagName !== 'PRE') return '\`' + node.innerText + '\`';

      // 递归处理子节点
      var childrenContent = '';
      for (var i = 0; i < node.childNodes.length; i++) {
        childrenContent += getMarkdown(node.childNodes[i]);
      }

      // 处理基础格式转换
      if (tag === 'A' && node.getAttribute('href')) return '[' + childrenContent + '](' + node.getAttribute('href') + ')';
      if (tag === 'STRONG' || tag === 'B') return '**' + childrenContent + '**';
      if (tag === 'EM' || tag === 'I') return '*' + childrenContent + '*';
      if (tag === 'BR') return '\\n';

      // 处理块级元素换行
      var blockTags = ['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'TR', 'BLOCKQUOTE'];
      if (blockTags.indexOf(tag) !== -1) {
        return '\\n' + childrenContent + '\\n';
      }

      return childrenContent;
    }

    document.addEventListener('copy', function(e) {
      var selection = window.getSelection();
      if (selection.isCollapsed) return;

      var container = document.createElement('div');
      for (var i = 0; i < selection.rangeCount; i++) {
        container.appendChild(selection.getRangeAt(i).cloneContents());
      }

      // 只有当选中内容包含公式、链接或代码时，才干预复制行为
      if (container.querySelector('mjx-container, a, code, [data-tex]')) {
        var markdown = getMarkdown(container).trim()
          .replace(/\\n{3,}/g, '\\n\\n'); // 压缩多余的空行
        
        if (markdown) {
          e.clipboardData.setData('text/plain', markdown);
          e.preventDefault();
          console.log('Copied with formulas preserved');
        }
      }
    });
  })();
</script>
`;

hexo.extend.injector.register('body_end', copyScript, 'post');
hexo.extend.injector.register('body_end', copyScript, 'page');
