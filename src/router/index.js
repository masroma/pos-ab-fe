//import vue router
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
//define a routes
const routes = [

    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },

    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "login" */ '../views/Home.vue')
    },

    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "login" */ '../views/admin/Dashboard.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },

    {
        path: '/admin/setting',
        name: 'setting',
        component: () => import( /* webpackChunkName: "login" */ '../views/admin/Setting.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },

    {
        path: '/admin/profile',
        name: 'profile',
        component: () => import( /* webpackChunkName: "login" */ '../views/admin/Profile.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },

    {
        path: '/admin/password',
        name: 'password',
        component: () => import( /* webpackChunkName: "login" */ '../views/admin/Password.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },

    {
        path: '/admin/permission',
        name: 'permission',
        component: () => import( /* webpackChunkName: "login" */ '../views/admin/Permission.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true,
            permission: 'permissions.index'
        }
    },

    {
        path: '/admin/forbidden',
        name: 'frobidden',
        component: () => import( /* webpackChunkName: "login" */ '../views/admin/Forbidden.vue'),
        meta: {
            //chek is loggedIn
            requiresAuth: true
        }
    },



]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

//define route for handle authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})


export default router