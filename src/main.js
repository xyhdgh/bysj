import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/js/rem'
import './assets/iconfont/iconfont.css'
import './assets/css/module.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
