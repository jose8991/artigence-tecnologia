import { createRouter, createWebHistory } from 'vue-router'
import VistaPrincipal from '../views/VistaPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: VistaPrincipal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
