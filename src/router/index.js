import { createRouter, createWebHistory } from "vue-router";
import ServicioPublicacion from "../views/services/ServicioPublicaciones.vue";
import ServicioHistorias from "../views/services/ServicioHistoria.vue";
import ServicioLista from "../views/services/ServicioLista.vue";
import ServicioEnsayos from "../views/services/ServicioEnsayos.vue";
import ServicioPoesia from "../views/services/ServicioPoesia.vue";
import ServicioCuentos from "../views/services/ServicioCuentos.vue";
import MissionVision from "../views/MissionVision.vue";
import loginPrincipal from "../views/RegisterLogin/LoginView.vue";
import registerPrincipal from "../views/RegisterLogin/RegisterView.vue";
import VistaPrincipal from "../views/VistaPrincipal.vue";
import interpolacionLineal from "../views/interpolacionLineal.vue";
import ContactMain from "../views/ContactMain.vue";
import textosEjemplos from "../views/textosEjemplos.vue";
import { getAuth } from "firebase/auth";
import swal from 'sweetalert';
const routes = [
  {
    path: "/",
    name: "home",
    component: VistaPrincipal,
  },
  {
    path: "/registrarse",
    name: "registrarse",
    component: registerPrincipal,
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
    path: "/mision-vision",
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
    path: "/publicaciones",
    name: "publicaciones",
    component: ServicioPublicacion,
  },
  {
    path: "/cuentos",
    name: "cuentos",
    component: ServicioCuentos,
  },
  {
    path: "/ensayos",
    name: "ensayos",
    component: ServicioEnsayos,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/poesia",
    name: "poesia",
    component: ServicioPoesia,
  },
  {
    path: "/generados",
    name: "generados",
    component: textosEjemplos,
  },
  {
    path: "/prueba",
    component: interpolacionLineal,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    redirect: "/",
  },
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
    swal({
      title: 'Para este servicio debes iniciar sesión',
      text: 'si no te has registrado, puedes hacerlo en el botón de registrarse',
      icon: 'warning',
    }),
      setTimeout(() => {
        next({ name: "ingresar" });
        swal.close();
      }, 2000);
    
  } else {
    next();
  }
});

export default router;
