import * as VueRouter from 'vue-router'

import Index from "../pages/Index/index.vue";
import Team from "../pages/Team/index.vue";
import User from "../pages/User/index.vue";
import Search from "../pages/Search/index.vue";
import UserEdit from "../pages/User/UserEdit.vue";

const routes = [
    {path: '/', component: Index},
    {path: '/team', component: Team},
    {
        path: '/user',
        component: User,
    },
    {
        path: '/user/edit',
        component: UserEdit,
    },
    {
        path: '/search',
        component: Search,

    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
