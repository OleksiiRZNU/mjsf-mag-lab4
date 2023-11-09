import Vue from 'vue'
import App from './App.vue'
// import services from './services';
import {prepareTodo} from "@/plugins/todo.plugin.js";
// Vue.prototype.$services = services;

Vue.config.productionTip = false

prepareTodo()

new Vue({
  render: h => h(App),
}).$mount('#app')
