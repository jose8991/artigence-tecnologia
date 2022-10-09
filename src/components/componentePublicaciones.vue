<template>
  <MainNavar />
  <main>
    <div class="fondo">
      <div v-if="!loading">
        <div class="texto">
          <p>
            En esta opcion se haran copys para tus publicaciones <br />
            de manera acertiva y efectiva, porfavor pon en la caja <br />
            de texto de una a 5 palabras claves que creas necesarias para <br />
            realizar el copy de tu agrado <br />
          </p>
        </div>
        <form action="">
          <div class="form">
            <h1>ingresa el título que quieres generar</h1>
            <div class="grupo">
              <input type="text" v-model="texto" /><span class="barra"></span>
              <label>ingreso del texto</label>
            </div>
            <h1>{{ resultado }}</h1>
            <button type="submit" @click="prueba">consultar</button>
          </div>
        </form>
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

h1 {
  color: black;
}

.fondo h1 {
  color: white;
  text-align: center;
}

.fondo__input {
  background: var(--blue-main);
  color: white;
}

/*
Web hecha con AlexCG Design, si te sirvió la plantilla por favor entra a AlexCG Design
		esta plantilla es libre para usar, así como otras plantillas más que tenemos en el canal...
		->>>> https://www.youtube.com/alexcgdesign <<<<-
*/

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  color: white;
  border: solid black;
  text-align: center;
  padding: 2em 2em;
  border-radius: 0.5em;
  width: 50%;
  font-family: var(--body-font);
  margin: 0 auto;
  margin-top: 0.5em;
  box-shadow: 0 0 6px 0 black;
}

body {
  background: #fc5c7d;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6a82fb, #fc5c7d);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  /* position:absolute; */
  color: var(--gradient);
  font-family: var(--heading-font);
}

form {
  background: var(--blue-main);
  width: 50%;
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 black;
  margin: 0 auto;
  margin-top: 0.5em;
  color: white;
}

.form {
  width: 100%;
  margin: auto;
}

form .grupo {
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
  form {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  form {
    width: 60%;
  }
}

@media screen and (max-width: 450px) {
  form {
    width: 80%;
  }
}

@media screen and (max-width: 300px) {
  form {
    width: 90%;
  }
}
</style>
