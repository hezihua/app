import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router" //匹配自己项目所对应的路径
// import device from "vue-device-detector"
import Vue3DeviceDetector from 'vue3-device-detector';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
// app.use(device)
app.use(Vue3DeviceDetector);
app.use(ElementPlus)
app.mount('#app')
