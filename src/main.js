import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTypedJs from 'vue-typed-js'
 
Vue.use(VueTypedJs)
Vue.use(router)
Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
