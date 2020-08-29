import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
//import VueSocketIO from 'vue-socket.io'
//Vue.use(new VueSocketIO({
//    debug: true,
//    connection: 'ws://localhost:3000/cable'
//}))
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
