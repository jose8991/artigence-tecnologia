<template>
  <section class="card container">
    <article class="card__item" v-for="option in options" :key="option">
      <p class="card__paragraph">
        {{ option.comment }}
      </p>

      <div class="card__profile">
        <figure class="card__picture">
          <img :src="option.img" class="card__img" />
        </figure>

        <div class="card__info">
          <h3 class="card__name">{{ option.author }}</h3>
          <p class="card__job">{{ option.description }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import dataComment from "@/data/comment.json";
const options = dataComment;
</script>

<style scoped>
.card {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
}

.card__item {
  background-color: var(--blue-testimonials);
  width: 90%;
  margin: 0 auto;
  padding: 1.5em 1em;
  border-radius: 4px;
  box-shadow: 1px 1px 10px -5px rgb(255, 255, 255, 0.5);
}

.card__item--first {
  position: relative;
}

.card__item--first::before {
  content: "";
  position: absolute;
  top: -30px;
  left: 0;
  background-image: url("@/assets/images_new_project/bg-quotes.png");
  width: 30px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}
.card__profile {
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.card__picture {
  width: 40px;
  height: 40px;
}

.card__img {
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.card__name {
  font-size: 1.2rem;
  font-family: var(--heading-font);
}

.card__job {
  color: #aaa9a9;
}
@media (min-width: 740px) {
  .card {
    flex-direction: row;
  }
}
</style>
