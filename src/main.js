import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入字体文件
import "./assets/fonts/iconfont.css"
// 全局注册button组件

import Button from "./components/button.vue"

Vue.component('htd-button', Button)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
