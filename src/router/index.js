import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderDetail from '../views/OrderDetail.vue'
import CreateOrder from '../views/CreateOrder.vue'
import UpdateOrder from '../views/UpdateOrder.vue'
import ProductOverview from '../views/ProductOverview.vue'
import Robots from '../views/Robots.vue';
import RestaurantMap from '../views/RestaurantMap.vue'
import Notifications from '../views/Notifications.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */'@/views/Orders.vue')
  },
  {
    path: '/orders/create',
    name: 'CreateOrder',
    component: CreateOrder
  },
  {
    path: '/orders/:id',
    name: 'OrderDetail',
    component: OrderDetail
  },
  {
    path: '/orders/update/:id',
    name: 'UpdateOrder',
    component: UpdateOrder
  },
  {
    path: '/products',
    name: 'ProductOverview',
    component: ProductOverview
  },
  {
    path: '/map',
    name: 'RestaurantMap',
    component: RestaurantMap
  },
  {
      path: '/robots',
      name: 'Robots',
      component: Robots
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
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

export default router
