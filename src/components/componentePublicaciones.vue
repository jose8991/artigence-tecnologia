<template>
  <div class="content">
    <div class="mb-4">
      <textarea class="form-control py-3" id="consulta" name="consulta" type="text" placeholder="ingresa el contenido"
        rows="4" v-model="texto"></textarea>
    </div>
    <div class="text-center"><button @click="consultar" class="btn btn-primary mt-4" type="submit">consultar</button></div>
    <h1>prueba</h1>
    <h1>{{resultado}}</h1>
  </div>

</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      texto: "clase de programacion en la noche con cafe",
      post: {
        tipo:"publicacion",
        contenido:this.texto
      },
      resultado: null
    }
  },
  methods: {
    consultar() {
      this.log("entro a consultar");
      axios.post("http://localhost:8000/", this.post).then((result) => {
      this.resultado=result.data.respuesta
      console.log(result.data.respuesta);
    })
      .catch((err) => {
        console.log("err" + err);
      });
    }
  },
  created() {
    let post = {
      tipo: 'publicacion',
      contenido: this.texto,
    };
    axios.post("http://localhost:8000/", post).then((result) => {
      this.resultado=result.data.respuesta
      console.log(result.data.respuesta);
    })
      .catch((err) => {
        console.log("err" + err);
      });
  }
};
</script>
  
<style scoped>
.content {

  height: 1200px;
  background-color: #f5f5f5;
}
</style>