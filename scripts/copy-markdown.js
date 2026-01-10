
// 注入脚本：1. MathJax 源码回填；2. 修复 TOC；3. 拦截复制
const script = `
<script>
  (function() {
    // === 1. MathJax Source Recovery (Critical Update) ===
    // 强制将已渲染的公式源码写入 DOM，解决注入过晚导致 data-tex 缺失的问题
    function recoverMathTex() {
        try {
            if (window.MathJax && window.MathJax.startup && window.MathJax.startup.document) {
                var doc = window.MathJax.startup.document;
                // 遍历 MathJax 内部维护的公式列表
                if (doc.math) {
                    for (var i = 0; i < doc.math.length; i++) {
                        var mathItem = doc.math[i];
                        var node = mathItem.typesetRoot;
                        if (node && !node.hasAttribute('data-tex')) {
                            node.setAttribute('data-tex', mathItem.math);
                            node.setAttribute('data-display', !!mathItem.display);
                        }
                    }
                }
            }
        } catch(e) { console.error('MathJax recover failed', e); }
    }
    
    // 尝试立即回复
    recoverMathTex();
    // 监听 MathJax 渲染完成事件（针对懒加载或后渲染的情况）
    if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
        window.MathJax.startup.promise.then(recoverMathTex);
    }

    // === 2. TOC Scroll Fix ===
    if (window.location.hash) {
      function fixScroll() {
        try {
            var target = document.querySelector(decodeURIComponent(window.location.hash));
            if (target) {
               var headerOffset = 70; 
               var elementPosition = target.getBoundingClientRect().top;
               var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
               window.scrollTo({ top: offsetPosition, behavior: "auto" });
            }
        } catch (e) {}
      }
      setTimeout(fixScroll, 500);
      setTimeout(fixScroll, 1500); // 二次检查
    }

    // === 3. Copy Interception (Final Fixed Version) ===
    function getMarkdown(node) {
      if (node.nodeType === 3) return node.textContent; 
      if (node.nodeType !== 1) return '';

      var tag = node.tagName.toUpperCase();
      
      // -- 1. Math Formula (Priority via protect-math wrapper) --
      // 检查由 protect-math.js 注入的 wrapper
      if (node.classList && node.classList.contains('math-source')) {
         var tex = node.getAttribute('data-tex');
         var isDisplay = node.getAttribute('data-display') === 'true';
         return isDisplay ? '\\n$$\\n' + tex + '\\n$$\\n' : '$' + tex + '$';
      }

      // -- 2. MathJax Fallback --
      // 如果 wrapper 丢失（罕见），尝试从 MathJax 容器读取
      if (tag === 'MJX-CONTAINER' || node.hasAttribute('data-tex')) {
        var tex = node.getAttribute('data-tex');
        if (tex) {
            var isDisplay = node.getAttribute('data-display') === 'true' || 
                            node.getAttribute('display') === 'true' ||
                            tag === 'DIV'; // 粗略判断
            return isDisplay ? '\\n$$\\n' + tex + '\\n$$\\n' : '$' + tex + '$';
        }
      }
      
      // -- Code --
      if (tag === 'PRE') return '\\n\`\`\`\\n' + node.innerText + '\\n\`\`\`\\n';
      if (tag === 'CODE' && node.parentElement.tagName !== 'PRE') return '\`' + node.innerText + '\`';
      if (tag === 'IMG') {
          var alt = node.getAttribute('alt') || '';
          var src = node.getAttribute('src') || '';
          return '![' + alt + '](' + src + ')';
      }

      // -- Recursive Children --
      var childrenContent = '';
      for (var i = 0; i < node.childNodes.length; i++) {
        childrenContent += getMarkdown(node.childNodes[i]);
      }

      // -- Inline Formatting --
      if (tag === 'A') {
          var href = node.getAttribute('href');
          // 过滤掉空链接（如锚点）和目录跳转链接
          if (href && childrenContent.trim() !== '' && !node.classList.contains('headerlink')) {
             return '[' + childrenContent + '](' + href + ')';
          }
          return childrenContent; // 如果是空链接或锚点，只保留内容（如果有）
      }
      if (tag === 'STRONG' || tag === 'B') return '**' + childrenContent + '**';
      if (tag === 'EM' || tag === 'I') return '*' + childrenContent + '*';
      if (tag === 'BR') return '\\n';

      // -- Block Structure --
      // List Items: Avoid extra newlines
      if (tag === 'LI') {
          return '\\n- ' + childrenContent.trim();
      }
      
      // Paragraphs: Handle nesting inside LI
      if (tag === 'P') {
          // 如果 P 是 LI 的直接子元素，且是第一个元素，不要换行，否则会导致列表项断层
          if (node.parentElement && node.parentElement.tagName === 'LI') {
              if (node === node.parentElement.firstElementChild) {
                  return childrenContent;
              }
              // 列表内的后续段落，缩进（简单处理，改为换行）
              return '\\n' + childrenContent; 
          }
          return '\\n' + childrenContent + '\\n';
      }

      // Headings
      if (['H1','H2','H3','H4','H5','H6'].indexOf(tag) !== -1) {
          var level = parseInt(tag.substring(1));
          return '\\n' + '#'.repeat(level) + ' ' + childrenContent + '\\n';
      }

      // Other Blocks
      if (['DIV', 'BLOCKQUOTE', 'UL', 'OL', 'TR'].indexOf(tag) !== -1) {
          if (tag === 'BLOCKQUOTE') return '\\n> ' + childrenContent + '\\n';
          return '\\n' + childrenContent + '\\n';
      }

      return childrenContent;
    }

    document.addEventListener('copy', function(e) {
      recoverMathTex(); // 再次尝试恢复，确保数据最新

      var selection = window.getSelection();
      if (selection.isCollapsed) return;

      var anchor = selection.anchorNode;
      var inPost = false;
      var current = anchor.nodeType === 3 ? anchor.parentElement : anchor;
      while (current) {
          if (current.classList && (current.classList.contains('post-content') || current.classList.contains('markdown-body'))) {
              inPost = true;
              break;
          }
          current = current.parentElement;
      }
      if (!inPost) return;

      var container = document.createElement('div');
      for (var i = 0; i < selection.rangeCount; i++) {
        container.appendChild(selection.getRangeAt(i).cloneContents());
      }
      
      // 检查是否有特征元素
      if (container.querySelector('mjx-container, [data-tex], pre, code, img, h1, h2, h3, li, p')) {
        var markdown = getMarkdown(container).trim();
        // 压缩过多的换行，但保留列表结构
        markdown = markdown.replace(/\\n{3,}/g, '\\n\\n'); 
        
        if (markdown) {
          e.clipboardData.setData('text/plain', markdown);
          e.preventDefault();
        }
      }
    });
  })();
</script>
`;

hexo.extend.injector.register('body_end', script, 'post');
hexo.extend.injector.register('body_end', script, 'page');
