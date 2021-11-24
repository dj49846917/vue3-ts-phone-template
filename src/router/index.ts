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
  },
  {
    path: '/select',
    name: 'SelectBox',
    component: () => import('@/views/Template/Vant/SelectBox/index.vue'), // 封装下拉选择框
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: () => import('@/views/Template/Echarts/index.vue'), // vue使用echarts
  },
  {
    path: '/addresslist',
    name: 'AddressList',
    component: () => import('@/views/Template/Other/AddressList/index.vue'), // 通讯录
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/Template/Other/Chat/index.vue'), // 聊天
  }
]

const router = createRouter({
  history: createWebHistory("/"), //history模式使用HTML5模式
  routes,
});

export default router;