import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
path: '/about',
name: 'about',
component: () => import('../views/About.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('../views/singleProduct.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
