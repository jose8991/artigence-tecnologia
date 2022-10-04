<template>
  <section class="join">
    <div class="join__container container">
      <h3 class="join__title">Acceda y Utilice Nuestros Servicios</h3>
      <p class="join__paragraph">
        Solo toma un minuto registrarse y nuestro nivel de inicio gratuito es
        extremadamente generoso. Si tiene alguna pregunta, nuestro equipo de
        soporte estará encantado de ayudarle.
      </p>

      <form class="join__form">
        <input
          type="text"
          placeholder="email@example.com"
          class="join__input join__input--text"
        />
        <input
          type="submit"
          value="Acceda a Nuestros Servicios"
          class="join__input join__input--submit"
        />
      </form>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.join {
  background-image: linear-gradient(
    var(--blue-main) 50%,
    var(--blue-footer) 50%
  );
  color: #fff;
  padding: 60px 0;
  margin: 0px auto;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

.join__container {
  background-color: var(--blue-testimonials);
  border-radius: 8px;
  padding-left: 1.5em;
  padding-right: 1.5em;
  text-align: center;
  justify-content: center;
}

.join__title {
  font-family: var(--heading-font);
  margin-bottom: 1em;
}

.join__paragraph {
  line-height: 1.5;
  margin-bottom: 1.5em;
}

.join__form {
  display: grid;
  gap: 1em;
}

.join__input {
  padding: 15px 20px;
  font: inherit;
  border-radius: 30px;

  outline: none;
  border: none;
}

.join__input--submit {
  background-image: var(--gradient);
  color: #fff;
  font-family: var(--heading-font);
  font-weight: bold;
}

@media (min-width: 740px) {
  .join__container {
    width: 70%;
  }

  .join__title {
    font-size: 2rem;
    margin-bottom: 0.7em;
  }

  .join__form {
    grid-template-columns: 1fr max-content;
  }
}
</style>
