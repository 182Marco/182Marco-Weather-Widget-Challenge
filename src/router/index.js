import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CanyoningToscana from '../views/CanyoningToscana.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/CanyoningToscana',
    name: 'CanyoningToscana',
    component: CanyoningToscana,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
