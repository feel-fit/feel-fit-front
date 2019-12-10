import Vue from 'vue'

import 'bootstrap'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/sass/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faArrowLeft,
  faAngleLeft,
  faAngleRight,
  faBars,
  faTimes,
  faSearch,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VLazyImagePlugin } from 'v-lazy-image'
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import VeeValidate from 'vee-validate'
import VueAWN from 'vue-awesome-notifications'
import Meta from 'vue-meta'

import VueScrollTo from 'vue-scrollto'

Vue.use(Meta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

// Your custom options
let options = { position: 'top-rigth' }

Vue.use(VueAWN, options)

window.$ = window.jQuery = require('jquery')

Vue.use(VueScrollTo)
Vue.use(VueBreadcrumbs)
Vue.use(VLazyImagePlugin)
Vue.use(VeeValidate)

// formato de fecha
const moment = require('moment')
require('moment/locale/es')
Vue.use(require('vue-moment'), {
  moment
})

library.add(faArrowRight, faArrowLeft, faAngleLeft, faAngleRight, faBars, faTimes, faSearch, faAngleDoubleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.filter('phone', phone => phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'))
Vue.filter('money', money => '$ ' + money.toString().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1.'))
Vue.filter('uppercase', text => text.toUpperCase())
Vue.filter('department_city', (addresses) => {
  if (addresses != undefined && addresses.length > 0) {
    let address = addresses[0]
    return address.city.department.name + '/' + address.city.name
  }
  return ''
})

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
