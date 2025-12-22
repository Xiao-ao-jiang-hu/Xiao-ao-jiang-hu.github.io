
const originalContentMap = new Map();

hexo.extend.filter.register('before_post_render', function (data) {
    // 记录原始 Markdown 内容，避免被其他插件（如 protect-math）修改
    originalContentMap.set(data.source, data.content);
    return data;
}, 1);

hexo.extend.filter.register('markdown-it:renderer', function (md) {
    const blockNames = [
        'paragraph_open', 'heading_open', 'list_item_open', 'blockquote_open',
        'code_block', 'fence', 'table_open', 'tr_open', 'bullet_list_open', 'ordered_list_open'
    ];

    blockNames.forEach(name => {
        const original = md.renderer.rules[name] || function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

        md.renderer.rules[name] = function (tokens, idx, options, env, self) {
            const token = tokens[idx];
            if (token.map) {
                token.attrSet('data-source-line', token.map[0]);
                token.attrSet('data-source-end-line', token.map[1]);
            }
            return original(tokens, idx, options, env, self);
        };
    });
});

hexo.extend.filter.register('after_post_render', function (data) {
    // 仅在文章和页面中嵌入源码
    if (data.layout !== 'post' && data.layout !== 'page') return data;

    const rawMarkdown = originalContentMap.get(data.source) || data._content;
    originalContentMap.delete(data.source);

    if (!rawMarkdown) return data;

    const encodedMarkdown = Buffer.from(rawMarkdown).toString('base64');

    // 注入隐藏的数据节点
    data.content += `<script class="raw-markdown-data" type="text/plain" data-content="${encodedMarkdown}"></script>`;

    return data;
});

const copyScript = `
<script>
  (function() {
    document.addEventListener('copy', function(e) {
      const selection = window.getSelection();
      if (selection.isCollapsed) return;

      const range = selection.getRangeAt(0);
      
      function findBlock(node) {
        let el = node.nodeType === 1 ? node : node.parentElement;
        while (el && !el.hasAttribute('data-source-line')) {
          el = el.parentElement;
          if (!el || el.classList.contains('markdown-body')) break;
        }
        return el && el.hasAttribute('data-source-line') ? el : null;
      }

      const startBlock = findBlock(range.startContainer);
      const endBlock = findBlock(range.endContainer);

      if (startBlock && endBlock) {
        const startLine = parseInt(startBlock.getAttribute('data-source-line'));
        const endLine = parseInt(endBlock.getAttribute('data-source-end-line'));

        // 查找当前文章对应的源码数据
        let container = startBlock;
        while (container && !container.querySelector('.raw-markdown-data')) {
          container = container.parentElement;
          if (!container || container.tagName === 'BODY') break;
        }
        const rawDataEl = container ? container.querySelector('.raw-markdown-data') : document.querySelector('.raw-markdown-data');
        
        if (rawDataEl) {
          const encoded = rawDataEl.getAttribute('data-content');
          const binary = atob(encoded);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          const rawMarkdown = new TextDecoder().decode(bytes);
          
          const allLines = rawMarkdown.split('\\n');
          const selectedMarkdown = allLines.slice(startLine, endLine).join('\\n');
          
          if (selectedMarkdown) {
            e.clipboardData.setData('text/plain', selectedMarkdown);
            e.preventDefault();
            console.log('Copied as Markdown (lines ' + (startLine + 1) + '-' + endLine + ')');
          }
        }
      }
    });
  })();
</script>
`;

hexo.extend.injector.register('body_end', copyScript, 'post');
hexo.extend.injector.register('body_end', copyScript, 'page');
