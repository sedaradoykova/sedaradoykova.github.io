// Include MathJax library
window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
      processRefs: true
    },
    svg: {
      fontCache: 'global'
    }
  };
  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js';
    script.async = true;
    document.head.appendChild(script);
  })();