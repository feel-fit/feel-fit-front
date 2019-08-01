
import Vue from 'vue'

import 'bootstrap'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/sass/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faAngleLeft, faAngleRight , faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
window.$ = window.jQuery = require('jquery')

library.add(faArrowRight,faAngleLeft,faAngleRight,faBars,faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.filter('phone', phone => phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'))
Vue.filter('money', money => '$ ' + money.toString().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1.'))
Vue.filter('uppercase', text => text.toUpperCase())

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
