import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

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
  },
  {
    path: '/amap',
    name: 'Amap',
    component: () => import('@/views/Template/Other/Map/Amap/index.vue'), // 高德地图
  },
  {
    path: '/amapLocation',
    name: 'AmapLocation',
    component: () => import('@/views/Template/Other/Map/Amap/getLocation.vue'), // 高德地图点击获取定位并描点
  },
  {
    path: '/bmap',
    name: 'Bmap',
    component: () => import('@/views/Template/Other/Map/Bmap/index.vue'), // 百度地图
  },
  {
    path: '/bmapLocation',
    name: 'BmapLocation',
    component: () => import('@/views/Template/Other/Map/Bmap/getLocation.vue'), // 百度地图点击获取定位并描点
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE), //history模式使用HTML5模式
  routes,
});

export default router;