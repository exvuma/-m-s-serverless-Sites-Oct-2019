require('reveal.js/js/reveal')
const Reveal = require('reveal.js')
require('reveal.js/css/reveal.css')
require('reveal.js/css/theme/solarized.css')
require('reveal.js/lib/css/zenburn.css')
require('./css/main.css')
require('./css/code.css')

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  autoPlayMedia: true,

  transition: 'slide', // none/fade/slide/convex/concave/zoom

  dependencies: [
    {
      src: 'plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]')
      },
    },
    {
      src: 'plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]')
      },
    },
    {
      src: 'plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad()
      },
    },
    { src: 'plugin/search/search.js', async: true },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
  ],
})

window.Reveal = Reveal
