import Vue from 'vue'
import App from './App.vue'
// Link a Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
// Import del font
import '@fontsource/alatsi'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
