import { createRouter, createWebHistory } from 'vue-router'
import VistaPrincipal from '../views/VistaPrincipal.vue'
import ServicioPublicacion from '../views/ServicioPublicaciones.vue'
import RegisterAndLogin from '../views/RegisterLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: VistaPrincipal
  },
  {
    path: '/publicaciones',
    name: 'publicaciones',
    component: ServicioPublicacion
  },
  {
    path: '/registrarse',
    component: RegisterAndLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
