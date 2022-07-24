import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store/store";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.config.devtools=true
Vue.use(VueLazyload,{
  loading:require('@/assets/img/icon/lazyload.jpg')
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
