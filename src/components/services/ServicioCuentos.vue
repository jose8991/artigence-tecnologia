<template>
  <main>
    <div class="fondo lerpw--font-size--i-2000px--20px--f-500px--13px--ends">
      <div v-if="!loading">
        <div class="texto">
          <h2>
            En esta opción podrás realizar cuentos creativos 
            manera acertiva y efectiva. Por favor, introduce la frase clave que
            de la clase del cuento que desea crear
          </h2>
        </div>
        <div class="contenedor-service">
          <div class="contenedor__form">
            <h2>Ingresa la frase clave para generar el cuento</h2>
            <br />
            <div class="grupo">
              <input
                type="text"
                v-model="texto"
                placeholder="ejemplo: el rey leon y sus amigos programadores"
              /><span class="barra"></span>
              <label>ingreso del texto</label>
            </div>
            <br />
            <h1>{{ resultado }}</h1>
            <button type="submit" @click="publicacion">consultar</button>
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


let texto = ref("");
const resultado = ref(null);
let loading = ref(false);

async function publicacion() {
  loading.value = true;
  let post = ref({
    tipo: "cuentos",
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
  min-height: 100vh;
  padding-top: 100px;
  margin: auto;
}
.result {
  font-family: var(--result-font);
}

h1 {
  font-family: var(--result-font);
  font-size: 1.5rem;
  text-align: center;
}
.fondo h1 {
  color: white;
  width: 100%;
  word-wrap: break-word;
  color: var(--gradient);
  font-family: var(--heading-font);
}

.texto {
  color: white;
  box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
  text-align: center;
  padding: 2em 2em;
  border-radius: 0.5em;
  width: 80%;
  font-family: var(--result-font);
  margin: 0 auto;
  margin-top: 0.5em;
  /* box-shadow: 0 0 6px 0 black; */
}
.texto h2 {
  text-align: center;
}

.contenedor-service {
  background: var(--blue-main);
  width: 80%;
  padding: 2em 2em;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
  margin: 0 auto;
  margin-top: 0.5em;
  color: white;
}

.contenedor__form {
  width: 100%;
  margin: auto;
  padding: 0 10px;
}

.contenedor-service .grupo {
  padding: 0 10px;
  position: relative;
}

input {
  background: none;
  color: white;
  font-size: 18px;
  padding: 15px 15px 15px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--cyan-gradient);
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  color: var(--cyan-gradient);
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
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0px;
  transition: 0.5s ease all;
  pointer-events: none;
  min-width: 300px;
  text-align: center;
  padding: 0 10px;
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

/* @media screen and (max-width: 1100px) {
  .contenedor-service {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .contenedor-service {
    width: 60%;
  }
} */

/* @media screen and (max-width: 450px) {
  contenedor-service {
    width: 80%;
  }
} */

/* @media screen and (max-width: 300px) {
  contenedor-service {
    width: 90%;
  }
} */
</style>
