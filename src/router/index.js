import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderView from '../views/OrderView.vue'
import Home from '@/views/Home.vue'
import Orders from '@/views/Orders.vue'
import EditOrderProductOverview from '@/views/EditOrderProductOverview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders/:id',
    name: 'OrderView',
    component: OrderView
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/orders/edit/products',
    name: 'EditOrderProductOverview',
    component: EditOrderProductOverview
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
