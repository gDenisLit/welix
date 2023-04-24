import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ItemApp from '../views/ItemApp.vue'
import EditView from '../views/EditView.vue'
import DetailsView from '../views/DetailsView.vue'
import LoginViewVue from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/items',
            name: 'ItemApp',
            component: ItemApp
        },
        {
            path: '/edit/:id?',
            name: 'edit',
            component: EditView
        },
        {
            path: '/details/:id',
            name: 'details',
            component: DetailsView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginViewVue
        },
    ]
})

export default router