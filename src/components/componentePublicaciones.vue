<template>
  <input type="text" v-model="texto" />
  <button @click="postPost" class="btn btn-primary mt-4" type="submit">
    consultar
  </button>
  <div v-if="loading">
    <TransitionService />
    <h1>cargandoooooo</h1>
  </div>

  <div v-else>
    <h1>{{ resultado }}</h1>
  </div>
</template>

<script>
import axios from "axios";
import TransitionPrincipal from "@/components/TransitionService.vue";


export default {
  data() {
    return {
      texto: "clase de programacion",
      resultado: null,
      loading: false,
    };
  },

  components: {
    TransitionService: TransitionPrincipal,
  },
  methods: {
    // Pushes posts to the server when called.
    postPost() {
      console.log("entro a la funcion");

      this.loading = true;
      let post = {
        tipo: "publicacion",
        contenido: this.texto,
      };
      axios
        .post(`https://in.markingall.com/`, post)
        .then((response) => {
          this.resultado = response.data.respuesta;
          this.loading = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
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
