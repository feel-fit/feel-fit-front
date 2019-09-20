
import Vue from 'vue'

import 'bootstrap'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/sass/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight,faArrowLeft, faAngleLeft, faAngleRight , faBars, faTimes, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
window.$ = window.jQuery = require('jquery')
import { VLazyImagePlugin } from "v-lazy-image";
import VueBreadcrumbs from 'vue-2-breadcrumbs';
import VeeValidate from 'vee-validate'

import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)
Vue.use(VueBreadcrumbs);
Vue.use(VLazyImagePlugin);
Vue.use(VeeValidate);



library.add(faArrowRight,faArrowLeft,faAngleLeft,faAngleRight,faBars,faTimes, faSearch)

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
