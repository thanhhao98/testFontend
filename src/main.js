import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'
new Vue({
  iconfont: 'md',
  render: h => h(App),
  components: {},
  store,
  router
}).$mount('#app')
