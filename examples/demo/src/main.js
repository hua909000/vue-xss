import Vue from 'vue'
import App from './App.vue'
import VueXss from 'vue-xss'
import options from '@/utils/xss.js'

Vue.use(VueXss, options)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
