<template>
  <header class="hero">
    <div class="hero__wave"></div>

    <section class="hero__main container">
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_8vyvisg1.json"
        background="transparent"
        speed="0.8"
        loop
        autoplay
        class="hero__img"
      ></lottie-player>

      <h1 class="hero__title">
        <span class="typed"></span>
      </h1>

      <!-- <a href="#" class="hero__cta"> enviar </a>  -->
    </section>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  const typed = new Typed(".typed", {
    strings: ["analizar", "comprender", "generar",".....................pruebaaaaa"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  console.log(typed);
});
</script>

<style scoped>
.hero__main {
  color: #fff;
  display: grid;
  gap: 1.5em;
  text-align: center;
  position: relative;
}
.hero__img {
  padding-top: 10px;
  position: relative;
  bottom: 10px;
  right: 0px;
  width: 80%;
  height: 80%;
  display: block;
  margin: 0 auto;
  max-width: 600px;
  animation: move_vector 6s ease-in-out infinite;
  -webkit-animation: move_vector 6s ease-in-out infinite;
}
.hero__title {
  width: 100%;
  word-wrap: break-word;
  /* position:absolute; */
  color: var(--gradient);
  font-family: var(--heading-font);
}

.hero__paragraph {
  line-height: 1.5;
  /* margin: .5em 0; */
}

.hero__cta {
  width: 250px;
  padding: 1em 0;
  border-radius: 2em;
  background-image: var(--gradient);
  color: #fff;
  font-weight: bold;
  place-self: center;
  font-family: var(--heading-font);
  text-decoration: none;
}

.hero {
  background-color: var(--blue-intro);
  position: relative;
}

.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background-color: var(--blue-main);
}

.hero__wave::before {
  content: "";
  position: absolute;
  top: -100px;
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  background-image: url("@/assets/images_new_project/bg-curvy-mobile.svg");
  background-size: 100% 100px;
}

@keyframes move_vector {
  0% {
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
  25% {
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }

  100% {
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
}

@media (min-width: 740px) {
  .hero__title {
    font-size: 2.5rem;
  }
  .hero__wave::before {
    background-image: url("@/assets/images_new_project/bg-curvy-desktop.svg");
  }
  .hero__img {
    object-fit: contain;
  }
}
</style>
