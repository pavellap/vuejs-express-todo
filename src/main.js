import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import vuetify from "@/Utils/vuetify";
import store from '@/store/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
