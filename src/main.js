import Vue from 'vue'
import App from './App.vue'

import('core-js/modules/es6.array.iterator')
import('core-js/modules/es6.promise')
import('core-js/modules/es6.object.assign')
import('core-js/modules/es7.promise.finally')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
