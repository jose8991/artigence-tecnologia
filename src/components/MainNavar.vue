<template>
  <nav
    class="justify-content_space-between-less-1000px"
    id="container-desplegable-vertical"
  >
    <input type="radio" id="check" />
    <label id="backdrop-menu" for="check"></label>
    <label for="check" id="menu-contraido" style="cursor: pointer">
      <i class="fas fa-bars"></i> Menú
    </label>
    <RouterLink to="/" id="logo-menu-head">
      <img
        class="lerpw--height--i-1000px--43px--f-500px--25px--ends"
        src="@/assets/images_new_project/logo-no-background.png"
      />
    </RouterLink>
    <ul
      class="ul-desplegable-vertical lerpw--font-size--i-2000px--20px--f-1000px--15px--ends"
    >
      <li
        class="li-desplegable-vertical"
        v-for="option in options"
        :key="option"
      >
        <label class="label-desplegable-vertical" :for="option.titulo">
          {{ option.titulo }}
          <div class="underline"></div>
        </label>
        <input type="radio" :id="option.titulo" name="open-menu" />
        <ul class="desplegable-vertical-submenu1">
          <li v-for="subconsultas in option.opciones" :key="subconsultas">
            <RouterLink
              :to="subconsultas.url"
              class="a-submenu-desplegable-vertical"
            >
              <label>
                {{ subconsultas.service }}
                <div class="underline-sub-menu"></div>
              </label>
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>

    <mainButton
      title="ingresar"
      link="/ingresar"
      class="lerpw--font-size--i-1000px--18px--f-450px--12px--ends"
      v-if="!isLoggedIn"
    />
    <button @click="handleSignOut" v-if="isLoggedIn"
    class="lerpw--font-size--i-1000px--18px--f-450px--12px--ends">cerrar sesion</button>
    <h1 class="borrar">{{ userLogeado }}</h1>
  </nav>
</template>

<script setup>
import mainButton from "@/components/atoms/MainButton.vue";
import DatosHeader from "@/data/lista-header.json";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const router = useRouter();
const isLoggedIn = ref(false);
const options = DatosHeader;
const autht = getAuth();
const user = autht.currentUser;
const userLogeado = ref(user);

let auth;
const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("cerrando sesion");
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("cerrar seccion");
};
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
  Array.from(
    document.getElementsByTagName("nav")[0].getElementsByTagName("label")
  )
    .filter((x) => !!x.htmlFor)
    .forEach((element) => {
      element.onclick = () => {
        let check_lang = document.getElementById(element.htmlFor);
        if (check_lang.checked)
          setTimeout(() => (check_lang.checked = false), 0);
      };
    });
});
</script>

<style scoped>
img {
  height: 30px;
}
.borrar {
  display: none;
  color: red;
}
.ul-desplegable-vertical label {
  font-weight: normal;
  position: relative;
  margin: 0;
}

#container-desplegable-vertical {
  user-select: none;
  z-index: 99999;
}

.ul-desplegable-vertical input[type="radio"] {
  display: none;
}

#container-desplegable-vertical .ul-desplegable-vertical {
  z-index: 99998;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
}

#container-desplegable-vertical ul {
  display: inline-block;
  list-style: none;
  padding: 0;
}

.ul-desplegable-vertical li a {
  cursor: pointer;
}

.ul-desplegable-vertical li label {
  cursor: pointer;
}

.ul-desplegable-vertical li a[href="/site/contactus"] {
  background: white;
  color: var(--blue-gradient) !important;
  font-weight: bolder;
  border-radius: 30px;
  padding: 5px 15px;
}

.ul-desplegable-vertical li a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.ul-desplegable-vertical li label {
  display: block;
}

.ul-desplegable-vertical ul {
  /* este es el submenu */
  background-color: var(--blue-intro);
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
}

.desplegable-vertical-submenu1 {
  min-width: 166px;
}

.desplegable-vertical-submenu2 {
  min-width: 80px;
}

.desplegable-vertical-submenu3 {
  min-width: 200px;
  transform: translateX(-50%);
}

.ul-desplegable-vertical li a:hover {
  /* background-color: rgba(0, 0, 0, 0.1); */
  /* text-decoration: underline !important; */
  color: inherit;
}

#container-desplegable-vertical .ul-desplegable-vertical li ul {
  display: none;
  position: absolute;
}

.ul-desplegable-vertical li ul li {
  position: relative;
}

.ul-desplegable-vertical li ul li ul {
  top: 0;
  right: 0;
  transform: translateX(100%);
}

nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--blue-intro);
  color: white;
  box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
  height: 70px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
}

#menu-contraido {
  margin-left: 40px;
  display: none;
}

#check {
  display: none;
}

#check:checked ~ ul {
  left: 0;
}

#check:checked ~ label {
  color: lightgray;
}

@media (min-width: 1000px) {
  #container-desplegable-vertical li:hover > ul {
    display: block;
  }
}

button {
  background: var(--gradient);
  padding: 5px 9px;
  color: var(--main-text-color);
  font-size: 17px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 1px -5px #20202049;
  cursor: pointer;
  transition: box-shadow 500ms;
}
@media (max-width: 1000px) {

  
  img {
    height: 25px;
  }
  #ajustador-de-menu {
    display: block !important;
  }

  .li-desplegable-vertical {
    margin-right: 0 !important;
  }

  #menu-contraido {
    display: block;
  }

  /* Selecciona el submenú y lo hace visible justo debajo del encabezado */
  .ul-desplegable-vertical input[type="radio"]:checked ~ ul {
    display: block !important;
    position: relative !important;
  }

  #check:checked ~ #backdrop-menu {
    opacity: 0.2;
    display: block !important;
  }

  #container-desplegable-vertical .ul-desplegable-vertical {
    overflow-y: auto;
    position: fixed !important;
    display: block !important;
    width: 45vw;
    height: 100vh;
    background: var(--blue-intro);
    top: 70px;
    left: -100%;
    text-align: center;
    opacity: 0.95;
  }

  .ul-desplegable-vertical ul > li {
    border: none;
  }

  .li-desplegable-vertical {
    margin-bottom: 15px !important;
  }

  .ul-desplegable-vertical ul > li {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.underline,
.underline-sub-menu {
  pointer-events: none;
  display: inline-block;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.underline {
  border-bottom: 3px solid white;
}

.underline-sub-menu {
  border-bottom: 4px solid #62e0d9;
}

li:hover label > .underline {
  width: 100%;
  transition: all 1s;
}

.label-desplegable-vertical {
  padding: 5px;
  width: 100%;
  height: 40px;
  position: relative;
}

.li-desplegable-vertical {
  margin-right: 55px;
}

.li-desplegable-vertical:last-child {
  margin-right: 0;
}

ul li:first-child > .a-submenu-desplegable-vertical {
  padding: var(--distance-items-submenu) var(--distance-items-submenu)
    calc(var(--distance-items-submenu) / 2) var(--distance-items-submenu);
}

ul li:last-child > .a-submenu-desplegable-vertical {
  padding: calc(var(--distance-items-submenu) / 2) var(--distance-items-submenu)
    var(--distance-items-submenu) var(--distance-items-submenu);
}

ul li > .a-submenu-desplegable-vertical {
  padding: calc(var(--distance-items-submenu) / 2) var(--distance-items-submenu);
}

.a-submenu-desplegable-vertical:hover .underline-sub-menu {
  width: 100%;
  transition: all 1s;
}

#backdrop-menu {
  background-color: black;
  position: fixed;
  top: var(--height);
  left: 40vw;
  width: 100vw;
  height: 100vh;
  z-index: 99997;
  opacity: 0;
  display: none;
}
</style>
