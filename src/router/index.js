import LoginApp from '@/components/LoginApp.vue'
import MenuApp from '@/views/MenuApp.vue'
import PrincipalApp from '@/views/PrincipalApp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MenuApp,
            redirect: '/login'
        },
        {
            path: '/inicio',
            name: 'inicio',
            component: PrincipalApp
        },
        {
            path: '/pedidos',
            name: 'pedidos',
            component: MenuApp,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginApp,
        },
        {
            path: '/inventario',
            name: 'inventario',
            component: MenuApp,
        },
        {
            path: '/sucursales',
            name: 'sucursales',
            component: MenuApp,
        },
        {
            path: '/productos',
            name: 'productos',
            component: MenuApp,
        },
    ]
})

export default router
