import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router" //匹配自己项目所对应的路径
// import device from "vue-device-detector"
import Vue3DeviceDetector from 'vue3-device-detector';

const app = createApp(App)
app.use(router)
// app.use(device)
app.use(Vue3DeviceDetector);
app.mount('#app')
