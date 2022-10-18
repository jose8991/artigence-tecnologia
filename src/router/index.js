import { createRouter, createWebHistory } from "vue-router";
import VistaPrincipal from "../views/VistaPrincipal.vue";
import ServicioPublicacion from "../views/services/ServicioPublicaciones.vue";
import ServicioHistorias from "../views/services/ServicioHistoria.vue";
import interpolacionLineal from "../views/interpolacionLineal.vue";
import ServicioLista from "../views/services/ServicioLista.vue";
import ContactMain from "../views/ContactMain.vue";
import MissionVision from "../views/MissionVision.vue";
import loginPrincipal from "../components/loginRegister/loginPrincipal.vue";
import RegistroPrincipal from "../components/loginRegister/RegistroPrincipal.vue";
import { getAuth } from "firebase/auth";

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
    name: "registrarse",
    component: RegistroPrincipal,
  },
  {
    path: "/ingresar",
    name: "ingresar",
    component: loginPrincipal,
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
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/404",
    redirect: "/"
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some((record) => record.meta.requiresAuth);
  const auth = getAuth();
  const usuario = auth.currentUser;
  if (rutaProtegida === true && usuario === null) {
    alert("Para acceder a este servicios debes iniciar seccion");
    next({ name: "registrarse" });
  } else {
    next();
  }
});

export default router;
