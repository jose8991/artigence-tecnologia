<template>
  <div class="carta-de-borde-giratorio">
  <div class="degradado1"></div>
  <div class="degradado2"></div>
    <div class="contenido-de-carta-de-borde-giratorio">
      <!-- aqui va el cuerpo html -->
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nemo voluptatem officiis autem culpa quidem, reprehenderit quo totam cum, asperiores optio laboriosam sed saepe possimus, eum amet ipsa molestiae sapiente suscipit ipsum perferendis. In delectus quo obcaecati ratione! Sed quidem iste cupiditate corrupti! Debitis quae nostrum fuga, ullam perspiciatis voluptates.</p>
      <img src="https://i.ibb.co/jfPpVPN/jose.jpg" alt="" class="zoom">
      <ul>
        <li>sss</li>
      </ul>
    </div>
  </div>
</template>

<script setup>

setTimeout(() => {
  actualizarCartasDeBordeGiratorio();
  document.querySelectorAll('.contenido-de-carta-de-borde-giratorio img').forEach(imagen => {
    imagen.classList;
        imagen.addEventListener('load', () => {
      actualizarCartasDeBordeGiratorio()
    })
  });
}, 0);

  function actualizarCartasDeBordeGiratorio() {

  document.querySelectorAll('.contenido-de-carta-de-borde-giratorio').forEach(contenidoDeCarta => {
    let carta = contenidoDeCarta.parentNode;
    let alturaCarta = contenidoDeCarta.offsetHeight;
    let anchoCarta = contenidoDeCarta.offsetWidth;
    carta.style.width= (anchoCarta+6) + 'px';
    carta.style.height= (alturaCarta+6) + 'px';
    console.log(contenidoDeCarta.style.width,contenidoDeCarta.style.height);

  });
}
window.addEventListener('resize', actualizarCartasDeBordeGiratorio);


</script>

<style  scoped>
.degradado1{
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, transparent, #5500ff);
  transform-origin: 0 0;
  left: 50%;
  top: 50%;
  animation: girar1 10s linear infinite;
}
.degradado2{
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #45f3ff);
  left: -50%;
  top: -50%;
  transform-origin: bottom right;
  animation: girar2 10s linear infinite;
}
.carta-de-borde-giratorio {
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
}
.contenido-de-carta-de-borde-giratorio{
  transition: all 0.25s;
  width: 300px;
  position: absolute;
  left: 3px;
  top: 3px;
  background: var(--blue-intro);
  color: white;
  text-align: center;
}
.carta-de-borde-giratorio, .contenido-de-carta-de-borde-giratorio{
  border-radius: 8px;
  padding: 20px;
}
.contenido-de-carta-de-borde-giratorio:hover{
  transform: translateY(-10px);
}
@keyframes girar1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes girar2 {
  0% {
    transform: rotate(0deg) ;
  }
  100% {
    transform:rotate(360deg) ;
  }
}
</style>