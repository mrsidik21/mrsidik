import Vue from 'vue'
import App from './App'
import i18n from './lang'
import store from './store'
import SidikComponents from './components/index'

import './assets/scss/index.scss'
import './icons'

Vue.config.productionTip = false
Vue.use(SidikComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  render: h => h(App),
  components: { App }
})
