import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'), //路由懒加载
  }
]

const router = createRouter({
  history: createWebHistory("/"), //history模式使用HTML5模式
  routes,
});

export default router;