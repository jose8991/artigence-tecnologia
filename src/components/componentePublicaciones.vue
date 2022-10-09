<template>
  <MainNavar />
  <main>
    <div class="fondo">
      <div v-if="!loading">
        <div class="texto">
          <h2>
            En esta opcion se haran copys para tus publicaciones <br />
            de manera acertiva y efectiva, porfavor pon en la caja <br />
            de texto la frase clave que creas necesarias para <br />
            realizar el copy de tu agrado <br />
          </h2>
        </div>
        <div class="contenedor-service">
          <div class="contenedor__form">
            <h1>ingresa el título que quieres generar</h1>
            <div class="grupo">
              <input type="text" v-model="texto" /><span class="barra"></span>
              <label>ingreso del texto</label>
            </div>
            <h1>{{ resultado }}</h1>
            <button type="submit" @click="prueba">consultar</button>
          </div>
        </div>
      </div>
      <div v-if="loading">
        <TransitionPrincipal />
      </div>

      <div v-else></div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import TransitionPrincipal from "@/components/TransitionService.vue";
import { postPost } from "@/components/modules/responseModel.js";
import MainNavar from "@/components/OrganismsPageMain/MainNavar.vue";
let texto = ref("");
const resultado = ref(null);
let loading = ref(false);

async function prueba() {
  loading.value = true;
  let post = ref({
    tipo: "publicacion",
    contenido: texto.value,
  });
  const response = await postPost(post.value);
  loading.value = response.recarga;
  resultado.value = response.post;
}
</script>

<style scoped>
main {
  background: var(--blue-main);
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  margin: auto;
}

.fondo h1 {
  color: white;
  text-align: center;
 
  width: 100%;
  word-wrap: break-word;
  color: var(--gradient);
  font-family: var(--heading-font);
}

.fondo__input {
  background: var(--blue-main);
  color: white;
}


.texto {
  color: white;
  box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
  text-align: center;
  padding: 2em 2em;
  border-radius: 0.5em;
  width: 50%;
  font-family: var(--body-font);
  margin: 0 auto;
  margin-top: 0.5em;
  /* box-shadow: 0 0 6px 0 black; */
}


.contenedor-service {
  background: var(--blue-main);
  width: 50%;
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
  margin: 0 auto;
  margin-top: 0.5em;
  color: white;
}

.contenedor__form {
  width: 100%;
  margin: auto;
}

.contenedor-service .grupo {
  position: relative;
  margin: 45px;
}

input,
textarea {
  background: none;
  color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--cyan-gradient);
  resize: none;
}
/* color mientras se esctibe */
input:focus,
textarea:focus {
  outline: none;
  color: white;
}

input:focus ~ label,
input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  position: center;
  top: -14px;
  font-size: 20px;
  font-family: var(--body-font);
  color: var(--cyan-gradient);
}

label {
  color: var(--colorTextos);
  font-size: 16px;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 0.5s ease all;
  pointer-events: none;
}

input:focus ~ .barra::before,
textarea:focus ~ .barra::before {
  width: 100%;
}
.barra {
  position: relative;
  display: block;
  width: 100%;
}
.barra::before {
  content: "";
  height: 2px;
  width: 0%;
  bottom: 0;
  position: absolute;
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
  transition: 0.3s ease all;
  left: 0%;
}
button {
  background: var(--gradient);
  display: block;
  width: 100px;
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px auto;
  cursor: pointer;
}

@media screen and (max-width: 1100px) {
  .contenedor-service {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .contenedor-service {
    width: 60%;
  }
}

@media screen and (max-width: 450px) {
  contenedor-service {
    width: 80%;
  }
}

@media screen and (max-width: 300px) {
  contenedor-service {
    width: 90%;
  }
}
</style>
