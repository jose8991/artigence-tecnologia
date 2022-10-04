<template>
  <MainNavar/>
  <main>
    <div class="fondo">
      <div v-if="!loading">
        <input type="text" v-model="texto" />
        <button @click="prueba" class="btn btn-primary mt-4" type="submit">
          consultar
        </button>
      </div>
      <div v-if="loading">
        <TransitionPrincipal />
        <h1>cargandoooooo</h1>
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
import MainNavar from "@/components/OrganismsPageMain/pppNavar.vue";
let texto = ref("Ciclismo");
const resultado = ref("");
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
	background: blue;
	width: 100%;
	height: 100vh;
	padding-top: 100px;
	margin: auto;
}
.content {
  height: 1200px;
  background-color: #f5f5f5;
}

h1 {
  color: f5f5f5;
}

/* .fondo {
  height: 100%;
  width: 100%;
  background-color: blue;
} */

.fondo h1 {
  color: white;
}
</style>
