import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/Template/Vant/PullRefreshList/index.vue'), // 上拉加载，下拉刷新
  },
  {
    path: '/loadingmodal',
    name: 'LoadingModal',
    component: () => import('@/views/Template/Vant/LoadingModal/index.vue'), // 加载中的弹窗
  }
]

const router = createRouter({
  history: createWebHistory("/"), //history模式使用HTML5模式
  routes,
});

export default router;