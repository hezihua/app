import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

//1. 定义要使用到的路由组件  （一定要使用文件的全名，得包含文件后缀名）
import index from "../pages/index.vue"
import about from "../pages/about.vue"
import investment from "../pages/investment.vue"
import career from "../pages/career.vue"
import contact from "../pages/contact.vue"
import privacy from '../pages/privacy.vue'
import disclaimer from '../pages/disclaimer.vue'

//2. 路由配置
const routes = [
    //redirect 重定向也是通过 routes 配置来完成，下面就是从 / 重定向到 /index
    {
        path: "/",
        redirect: "/index",
    },
    { path: "/index", component: index },
    { path: "/about", component: about },
    { path: "/investment", component: investment },
    { path: "/career", component: career },
    { path: "/contact", component: contact },
    { path: "/privacy", component: privacy },
    { path: "/disclosures", component: disclaimer },
]

// 3. 创建路由实例
const router = createRouter({
    // （1）采用hash 模式
    // history: createWebHashHistory(),
    // （2）采用 history 模式
    history: createWebHistory(),
    routes, //使用上方定义的路由配置
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //       return {
    //         selector: to.hash,
    //         behavior: 'smooth' // 'smooth' 或 'auto'
    //       };
    //     }
    //   }
})

// 4. 导出router
export default router

