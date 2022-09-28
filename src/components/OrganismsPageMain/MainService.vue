<template>
      <section class="productive container">
        <figure class="productive__picture">
          <img
            src="@/assets/images_new_project/inteligence.jpg"
            class="productive__img"
          />
        </figure>

        <div class="productive__texts">
          <h3 class="productive__title">
            Aplica Inteligencia Artificial, y Optimiza tu Tiempo
          </h3>

          <p class="productive__paragraph">
            Logrando disminuir en las actividades el timepo y la calidad de
            mejora de los trabajos escolares.
          </p>

          <p class="productive__paragraph">
            Con creacion artificial y desarrollo inteligente realiza destacados
            copyswrite y ayuda a los community manager.
          </p>

          <a href="#" class="productive__cta">
            Mira Como Artigence Trabaja
            <img
              src="@/assets/images_new_project/icon-arrow.svg"
              class="productive__arrow"
            />
          </a>
        </div>
      </section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>
.productive {
  color: #fff;
  display: grid;
  gap: 3em;
}

.productive__img {
  display: block;
  width: 100%;
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