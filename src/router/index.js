import Vue from 'vue';
import VueRouter from 'vue-router';
import TrmHome from '../views/TrmHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TrmHome
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
