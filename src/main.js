import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "@/store";

import toast from '@/components/common/toast'
Vue.use(toast)

import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload,{
  loading:require('@/assets/img/common/placeholder.png')
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
