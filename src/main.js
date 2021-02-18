import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import '@/styles/style.scss'
import Vuetify from 'vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faTwitter, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')

