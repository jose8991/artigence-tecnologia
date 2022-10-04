<template>
  <section class="about container">
    <article class="about__item" v-for="option in options" :key="option">
      <figure class="about__picture">
        <img :src="option.img" class="about__img" />
      </figure>

      <h3 class="about__title">{{ option.title }}</h3>

      <p class="about__paragraph">
        {{ option.desc }}
      </p>
    </article>
  </section>
</template>

<script setup>
import dataAbout from "@/data/about-services.json";
const options = dataAbout;
</script>

<style scoped>
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  overflow: hidden;
}
.about {
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5em;
}

.about__img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.about__title {
  margin-top: 1.4em;
  margin-bottom: 1em;
  font-family: var(--heading-font);
}
@media (min-width: 740px) {
  .about {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .about__item {
    width: 40%;
  }
}
</style>
