<template>
  <div class="contenedor">
    <div
      class="carta-de-borde-giratorio"
      v-for="dato in personalCards"
      :key="dato"
    >
      <div class="degradado1"></div>
      <div class="degradado2"></div>

      <div class="contenido-de-carta-de-borde-giratorio">
        <!-- aqui va el cuerpo html -->
        <img :src="dato.img" alt="" class="zoom" />
        <h1>{{ dato.title }}</h1>
        <h2>{{ dato.ocupation }}</h2>
        <ul>
          <li>
            <a :href="dato.linkedin" target="_blank"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </li>
          <li>
            <a :href="dato.whatsapp" target="_blank"
              ><i class="fab fa-whatsapp"></i> Whatsapp</a
            >
          </li>
          <li>
            <a :href="dato.github" target="_blank"
              ><i class="fab fa-github"></i> Github</a
            >
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import infoPersonal from "@/data/personal-cards.json";
let personalCards = infoPersonal;
setTimeout(() => {
  actualizarCartasDeBordeGiratorio();
  document
    .querySelectorAll(".contenido-de-carta-de-borde-giratorio img")
    .forEach((imagen) => {
      imagen.classList;
      imagen.addEventListener("load", () => {
        actualizarCartasDeBordeGiratorio();
      });
    });
}, 0);

function actualizarCartasDeBordeGiratorio() {
  document
    .querySelectorAll(".contenido-de-carta-de-borde-giratorio")
    .forEach((contenidoDeCarta) => {
      let carta = contenidoDeCarta.parentNode;
      let alturaCarta = contenidoDeCarta.offsetHeight;
      let anchoCarta = contenidoDeCarta.offsetWidth;
      carta.style.width = anchoCarta + 6 + "px";
      carta.style.height = alturaCarta + 6 + "px";
      console.log(contenidoDeCarta.style.width, contenidoDeCarta.style.height);
    });
}
window.addEventListener("resize", actualizarCartasDeBordeGiratorio);
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 12px; 
}
.degradado1 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, transparent, #5500ff);
  transform-origin: 0 0;
  left: 50%;
  top: 50%;
  animation: girar1 10s linear infinite;
}
.degradado2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #45f3ff);
  left: -50%;
  top: -50%;
  transform-origin: bottom right;
  animation: girar2 10s linear infinite;
}
.carta-de-borde-giratorio {
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  height: 100vh;
  justify-content: center;
}
.contenido-de-carta-de-borde-giratorio {
  transition: all 0.25s;
  width: 350px;
  position: absolute;
  left: 3px;
  top: 3px;
  background: var(--blue-intro);
  color: white;
  text-align: center;
}
.contenido-de-carta-de-borde-giratorio a {
  margin-top: 18px;
  color: #7a7a7a;
  font-weight: 600;
  font-size: xx-large;
}
.carta-de-borde-giratorio,
.contenido-de-carta-de-borde-giratorio {
  border-radius: 8px;
  padding: 20px;
}
/* .contenido-de-carta-de-borde-giratorio:hover {
  transform: translateY(-10px);
} */
@keyframes girar1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes girar2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
