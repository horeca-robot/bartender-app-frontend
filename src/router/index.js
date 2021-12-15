import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from '../services/AuthService'

Vue.use(VueRouter)

const authService = new AuthService();

const routes = [
    {
        path: '/orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */'@/views/Orders/Orders.vue')
    },
    {
        path: '/orders/create',
        name: 'CreateOrder',
        component: () => import(/* webpackChunkName: "orders" */'@/views/Orders/CreateOrder.vue')
    },
    {
        path: '/orders/:id',
        name: 'OrderDetail',
        component: () => import(/* webpackChunkName: "orders" */'@/views/Orders/OrderDetail.vue')
    },
    {
        path: '/orders/update/:id',
        name: 'UpdateOrder',
        component: () => import(/* webpackChunkName: "orders" */'@/views/Orders/UpdateOrder.vue')
    },
    {
        path: '/products',
        name: 'ProductOverview',
        component: () => import(/* webpackChunkName: "products" */'@/views/Products/ProductOverview.vue')
    },
    {
        path: '/map',
        name: 'RestaurantMap',
        component: () => import(/* webpackChunkName: "map" */'@/views/RestaurantMaps/RestaurantMap.vue')
    },
    {
        path: '/robots',
        name: 'Robots',
        component: () => import(/* webpackChunkName: "robots" */'@/views/Robots/Robots.vue')
    },
    {
        path: '/employeeSelection',
        name: 'EmployeeSelection',
        component: () => import(/* webpackChunkName: "auth" */'@/views/Auth/EmployeeSelection.vue')
    },
    {
        path: '/login/:id',
        name: 'Login',
        component: () => import(/* webpackChunkName: "auth" */'@/views/Auth/Login.vue')
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: () => import(/* webpackChunkName: "notifications" */'@/views/Notifications.vue')
    },
    {
        path: '*',
        redirect: '/orders',
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const token = authService.getLocalJWT();
    const authRoutes = ['Login', 'EmployeeSelection'];

    if(authRoutes.includes(to.name)) {
        if(token !== null && authService.verifyJWT(token)) {
            next('/orders');
        } else {
            next();
        }
    }

    if(token === null && !authRoutes.includes(to.name)) {
        next('/employeeSelection');
    }

    next();
});

export default router
