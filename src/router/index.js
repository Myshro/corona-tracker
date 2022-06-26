import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TestPage from '../views/TestPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/testpage',
    name: 'testpage',
    component: TestPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
