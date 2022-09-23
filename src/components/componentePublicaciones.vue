<template>
  <input type="text" v-model="texto" />
  <button @click="postPost" class="btn btn-primary mt-4" type="submit">
    consultar
  </button>

  <h1>{{ resultado }}</h1>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      texto: "clase de programacion en la noche con cafe",
      resultado: null
    }
  },
  methods: {
    // Pushes posts to the server when called.
    postPost() {
      let post = {
      tipo: 'publicacion',
      contenido: this.texto,
    };
      axios.post(`http://localhost:8000/`,post)
      .then(response => {
        this.resultado=response.data.respuesta
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped>
.content {
  height: 1200px;
  background-color: #f5f5f5;
}
</style>
