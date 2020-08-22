import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
var data = {
  resultType: 0
  , resultTypes: [
    { id: 0, name: "Classic" }
    , { id: 1, name: "Tabbed" }
    , { id: 2, name: "Counts" }
  ]
}
new Vue({
  render: h => h(App),
  data: data,
}).$mount('#app')
