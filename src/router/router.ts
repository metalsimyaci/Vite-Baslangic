import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      name: 'Home',
      component: () => import('/src/views/Home.vue'),
   },
   {
      path: '/about',
      name: 'About',
      component: () => import('/src/views/About.vue'),
   }
];

const baseUrl = '/';
const router = createRouter({
   history: createWebHistory(baseUrl),
   routes,
   linkActiveClass: 'active',
});

export default router;
