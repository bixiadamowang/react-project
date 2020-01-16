
// 让next.js支持css
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extension['.css'] = file => {}
}

module.exports = withCss({})