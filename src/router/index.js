import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomeVue from '../views/Home.vue';
import AboutVue from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
