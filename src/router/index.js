import { createRouter, createWebHistory } from "vue-router";
import VistaPrincipal from "../views/VistaPrincipal.vue";
import ServicioPublicacion from "../views/ServicioPublicaciones.vue";
import ServicioHistorias from "../views/ServicioHistoria.vue";
import interpolacionLineal from "../views/interpolacionLineal.vue";
import ServicioLista from "../views/ServicioLista.vue";
import RegisterAndLogin from "../views/RegisterLogin.vue";
import ContactMain from "../views/ContactMain.vue";
import MissionVision from "../views/MissionVision.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: VistaPrincipal,
  },
  {
    path: "/publicaciones",
    name: "publicaciones",
    component: ServicioPublicacion,
  },
  {
    path: "/registrarse",
    component: RegisterAndLogin,
  },
  {
    path: "/contactenos",
    component: ContactMain,
  },
  {
    path: "/historia",
    component: MissionVision,
  },
  {
    path: "/historias",
    component: ServicioHistorias,
  },
  {
    path: "/listas",
    component: ServicioLista,
  },
  {
    path: "/prueba",
    component: interpolacionLineal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
