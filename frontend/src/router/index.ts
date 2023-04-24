import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/app/home-page.vue'
import loginPage from '@/views/app/login-page.vue'
import templatePage from '@/views/app/template-page.vue'
import details from '@/views/editor/details.vue'
import editor from '@/views/editor/editor.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/login',
            name: 'login',
            component: loginPage
        },
        {
            path: '/template',
            name: 'template',
            component: templatePage
        },
        {
            path: '/details/:id',
            name: 'details',
            component: details
        },
        {
            path: '/editor/:id',
            name: 'editor',
            component: editor
        },
    ]
})

export default router
