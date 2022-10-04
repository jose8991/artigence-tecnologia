<template>
    <section class="productive container">
      <figure class="productive__picture">
        <lottie-player
          src="https://lottie.host/32827abf-03db-40b4-8cc0-c22276aeb0d7/IVDjFNwyad.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="productive__img"
        ></lottie-player>
        <!-- <img
              src="@/assets/images_new_project/illustration-stay-productive.png"
              class="productive__img"
            /> -->
      </figure>
  
      <div class="productive__texts">
        <h3 class="productive__title">
          Aplica Inteligencia Artificial, y Optimiza tu Tiempo
        </h3>
  
        <p class="productive__paragraph">
          Logrando disminuir en las actividades el timepo y la calidad de mejora
          de los trabajos escolares.
        </p>
  
        <p class="productive__paragraph">
          Con creacion artificial y desarrollo inteligente realiza destacados
          copyswrite y ayuda a los community manager.
        </p>
  
        <h3 class="productive__cta">
            <span class="typed"></span>
          <!-- <img
            src="@/assets/images_new_project/icon-arrow.svg"
            class="productive__arrow"
          /> -->
        </h3>
      </div>
    </section>
  </template>
  
  <script setup>
 import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  const typed = new Typed(".typed", {
    strings: ["analizar", "comprender", "generar"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  console.log(typed);
});
  </script>
  
  <style scoped>
  .productive {
    color: #fff;
    display: grid;
    gap: 3em;
  }
  
  .productive__img {
    display: block;
    width: 90%;
    height: 90%;
    margin: 0 auto;
    max-width: 600px;
  }
  
  .productive__title {
    font-family: var(--heading-font);
    margin-bottom: 0.7em;
  }
  
  .productive__paragraph {
    line-height: 1.7;
    margin-bottom: 1em;
  }
  
  .productive__cta {
    display: inline-block;
    color: var(--cyan-gradient);
    line-height: 2.5;
    text-decoration: none;
    border-bottom: 1px solid var(--cyan-gradient);
  }
  
  .productive__arrow {
    margin-left: 0.3em;
    vertical-align: middle;
  }
  
  @media (min-width: 740px) {
    .productive {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  
    .productive__title {
      font-size: 2rem;
      margin-bottom: 0.6em;
    }
  }
  </style>
  