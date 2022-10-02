<template>
  <input type="text" v-model="texto" />
  <h1>{{ texto }}</h1>
  <button @click="prueba" class="btn btn-primary mt-4" type="submit">
    consultar
  </button>
  <div v-if="loading">
    <TransitionPrincipal />
    <h1>cargandoooooo</h1>
  </div>

  <div v-else>
    <h1>{{ resultado }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TransitionPrincipal from "@/components/TransitionService.vue";
import {postPost} from "@/components/modules/responseModel.js";
let texto = ref("Ciclismo");
const resultado = ref("");
let loading = ref(false);


async function prueba() {
  loading.value = true;
  let post = ref({
    tipo: "publicacion",
    contenido: texto.value,
  });
  const response=await postPost(post.value);
  loading.value = response.recarga;
  resultado.value = response.post;
}
</script>

<style scoped>
.content {
  height: 1200px;
  background-color: #f5f5f5;
}
h1 {
  color: blue;
}
</style>
