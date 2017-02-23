import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import AppRecife from './Recife.vue';
import AppPorto from './Porto.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/',
    component: App
  },
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
  routes,
  mode: 'history' // removes the # from URL
});

new Vue({
  el: '#app',
  router,
  components: { App }
})
