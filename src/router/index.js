import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderView from '../views/OrderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */'@/views/Orders.vue')
  },
  {
    path: '/orders/:id',
    name: 'OrderView',
    component: OrderView
  },
  {
    path: '/orders/edit/products',
    name: 'EditOrderProductOverview',
    component: () => import(/* webpackChunkName: "orders-products" */'@/views/EditOrderProductOverview')
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
