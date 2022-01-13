import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NotificationService from './services/NotificationService';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

NotificationService.connect();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
