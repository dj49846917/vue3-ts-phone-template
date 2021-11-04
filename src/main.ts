import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/css/global.scss';
import "amfe-flexible/index.js"

const app = createApp(App)
app.use(router).use(store).use(Vant).mount('#app')