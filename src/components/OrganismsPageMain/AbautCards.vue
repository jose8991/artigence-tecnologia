<template>
  <section class="about container">
    <article class="about__item">
      <figure class="about__picture">
        <img
          src="@/assets/images_new_project/icon-any-file.svg"
          class="about__img"
        />
      </figure>

      <h3 class="about__title">Aprendizaje de Calidad</h3>

      <p class="about__paragraph">
        Con la ayuda de nuestros servicios realizar trabajos escolares sera mas
        facil e innovador.
      </p>
    </article>

    <article class="about__item">
      <figure class="about__picture">
        <img
          src="@/assets/images_new_project/icon-security.svg"
          class="about__img"
        />
      </figure>

      <h3 class="about__title">En Cualquier Lugar</h3>

      <p class="about__paragraph">
        Acceso a nuestros servicios en cualqueir lugar que pueda acceder.
      </p>
    </article>

    <article class="about__item">
      <figure class="about__picture">
        <img
          src="@/assets/images_new_project/icon-collaboration.svg"
          class="about__img"
        />
      </figure>

      <h3 class="about__title">Comprometidos con el Progreso</h3>

      <p class="about__paragraph">
        La era digital en nuestra tecnologia de inteligencia artificial ayudara
        a ser facil la vida de muchas personas.
      </p>
    </article>

    <article class="about__item">
      <figure class="about__picture">
        <img
          src="@/assets/images_new_project/icon-any-file.svg"
          class="about__img"
        />
      </figure>

      <h3 class="about__title">Digital</h3>

      <p class="about__paragraph">
        La facilidad de trabajo en el marketing digital es una optimizacion de
        negocios online .
      </p>
    </article>
  </section>
</template>

<script setup></script>

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
