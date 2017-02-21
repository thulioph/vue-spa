import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import AppRecife from './Recife.vue';
import AppPorto from './Porto.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/recife',
    component: AppRecife
  },
  {
    path: '/porto',
    component: AppPorto
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
