import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateAndUpdateOrder from '../views/CreateAndUpdateOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */'@/views/Orders.vue')
  },
  {
    path: '/order/:id',
    name: 'CreateAndUpdateOrder',
    component: CreateAndUpdateOrder
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
