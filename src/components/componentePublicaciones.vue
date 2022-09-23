<template>
  <input type="text" v-model="texto" />
  <button @click="sendModel" class="btn btn-primary mt-4" type="submit">
    consultar
  </button>
  <div v-if="loading">
    <h1>cargando</h1>
  </div>
  <div v-else>
  <h1>{{ result }}</h1>
</div>
</template>

<script setup>
import axios from "axios";
import { ref,defineProps } from "vue";

// const  = ref("");
let result = ref("");
const loading = ref(false);


defineProps({
  texto:String
});

let post = {
  tipo: "publicacion",
  contenido: texto,
};

function postPost() {
  console.log("entro");

  return axios
    .post(`http://localhost:8000/`, post)
    .then((response) => {
      console.log("response");
      result.value  = response.data.respuesta;
      console.log(result);
    })
    .catch((e) => {
      this.errors.push(e);
    });
}

async function sendModel() {
  loading.value = true;
  console.log("entro a la funcion que retorna el resultado");
  let resultModel = await postPost();
  console.log(resultModel);
  loading.value = false;
}
</script>

<style scoped>
.content {
  height: 1200px;
  background-color: #f5f5f5;
}
</style>
