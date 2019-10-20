import xss from 'xss'

export default {
  install: function (Vue, options = {}) {
    Object.defineProperty(Vue.prototype, '$xss', {
      value: function (html) {
        return xss(html, options)
      }
    })
  }
}
