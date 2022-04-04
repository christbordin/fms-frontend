import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.css'
import 'datatables.net-bm'
import 'datatables.net-bm/css/dataTables.bulma.min.css'
import 'datatables.net-buttons-bm/js/buttons.bulma'
import 'datatables.net-buttons-bm/css/buttons.bulma.min.css'
import  "datatables.net-buttons/js/buttons.colVis"
import  "datatables.net-buttons/js/buttons.flash"
import  "datatables.net-buttons/js/buttons.html5"
import  "datatables.net-buttons/js/buttons.print"
import 'jszip'
import 'pdfmake'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
