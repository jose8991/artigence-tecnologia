<template>
  <MainNavar />
  <main>
    <div class="fondo">
      <div v-if="!loading">
        <h1>
          artigencetecnologia es una aplicación de inteligencia artificial
          aplicada a la generación de contenidos en la cual su algoritmo
          inteligente crea contenido único y de calidad al simular la manera en
          que lo haría un cerebro humano.
        </h1>
        <input type="text" class="fondo__input" v-model="texto" />
        <button @click="prueba" class="btn btn-primary mt-4" type="submit">
          consultar
        </button>
      </div>
      <div v-if="loading">
        <TransitionPrincipal />
      </div>

      <div v-else>
        <h1>{{ resultado }}</h1>
      </div>
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
  color: f5f5f5;
}

.fondo h1 {
  color: white;
  text-align: center;
}

.fondo__input {
  background: var(--blue-main);
  color: white;
}
</style>
