
import Vue from 'vue'

import 'bootstrap'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/sass/app.scss'

Vue.config.productionTip = false
Vue.filter('phone', phone => phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'))
Vue.filter('money', money => '$ ' + money.toString().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1.'))
Vue.filter('uppercase', text => text.toUpperCase())

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
