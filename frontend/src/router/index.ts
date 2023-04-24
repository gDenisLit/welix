import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ExploreView from '../views/ExploreView.vue'
import WapDetailsView from '../views/WapDetailsView.vue'
import WapEditView from '../views/WapEditView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/explore',
            name: 'explore',
            component: ExploreView
        },
        {
            path: '/details/:id',
            name: 'details',
            component: WapDetailsView
        },
        {
            path: '/editor/:id',
            name: 'editor',
            component: WapEditView
        },
    ]
})

export default router