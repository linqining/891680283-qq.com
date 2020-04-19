import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from'./router/index'
import axios from 'axios'
import store from './store'


Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  //路由切换时，如果没有就添加，有就跳过执行，添加固定参数
  if (!['Home','ProductList','ProductDetail','Login','Register'].includes(to.name)) {
    if(store.state.isLogin){
      next()
    }else{
      next({
        name: 'Login',
      })
    }
  }else{
    next()
  }
})


new Vue({
  router,
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
