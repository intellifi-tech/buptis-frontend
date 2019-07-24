import Vue from "vue"
import App from "./App.vue"

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax

// Custom Frameworks
import Vuelidate from 'vuelidate'
import ApiService from '@/services/api.service'
import i18n from '@/shared/i18n'
import TokenService from '@/services/token.service'

Vue.use(Vuesax)
Vue.use(Vuelidate)

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from "./router"

// Vuex Store
import store from "./stores/store"

// Set the base URL of the API
if (process.env.NODE_ENV === 'production') {
  ApiService.init(process.env.VUE_APP_PROD_ROOT_API)
} else {
  ApiService.init(process.env.VUE_APP_DEV_ROOT_API)
}

if (TokenService.getToken()) {
  ApiService.setHeader()
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app")
