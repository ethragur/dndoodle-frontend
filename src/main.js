/**
 * Axios is for making AJAX requests
 *
 */
import axios from 'axios';
window.axios = axios;

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */
import Vue from 'vue';
window.Vue = Vue;

import Router from 'vue-router';
Vue.use(Router);

import router from './router.js';
//import store from './store.js';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
