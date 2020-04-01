import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from'./router/index'

// 改写组件的样式
import '@/assets/css/custom.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
