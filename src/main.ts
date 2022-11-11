import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
