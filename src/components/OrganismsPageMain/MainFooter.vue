<template>
  <footer class="footer">
    <section class="footer__container container">
      <img
        src="@/assets/images_new_project/logo-no-background.png"
        class="footer__logo"
      />

      <div class="footer__items">
        <p class="footer__contact footer__contact--first">
          <img
            src="@/assets/images_new_project/icon-location.svg"
            class="footer__icon"
          />
          Risaralda,Dosquebradas <br />
          Laureles2 manzan8 casa2 <br />
          C.P 661002
        </p>

        <div class="footer__content">
          <p class="footer__contact footer__contact--second">
            <img
              src="@/assets/images_new_project/whatsapp.svg"
              class="footer__icon"
            />
            +57 318 634 71 37 <br />
            +57 301 573 04 64
          </p>

          <div class="footer__location">
            <p class="footer__contact">
              <img
                src="@/assets/images_new_project/gmail.svg"
                class="footer__icon"
              />
              artigencei@gmail.com
            </p>
          </div>
        </div>

        <nav class="footer__nav">
          <a href="#" class="footer__link">Terminos y condiciones</a>
          <a href="#" class="footer__link">Acerca de Nosotros</a>
          <a href="#" class="footer__link">Comentarios</a>
        </nav>

        <nav class="footer__nav">
          <a href="#" class="footer__link">Contactenos</a>
          <a href="#" class="footer__link">Servicios</a>
          <a href="#" class="footer__link">Soporte</a>
        </nav>

        <div class="footer__social">
          <a href="#" class="footer__media"
            ><img src="@/assets/images_new_project/fb.svg" class="footer__img"
          /></a>
          <a href="#" class="footer__media"
            ><img
              src="@/assets/images_new_project/twitter.svg"
              class="footer__img"
          /></a>
          <a href="#" class="footer__media footer__media--last"
            ><img
              src="@/assets/images_new_project/instagram.svg"
              class="footer__img"
          /></a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script></script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
}

.nav__logo {
  width: 100px;
}

.nav__img {
  width: 100%;
  display: block;
}

.nav__link {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  margin-left: 0.8em;
}

.nav__link:first-of-type {
  margin-left: auto;
}

.footer {
  background-color: var(--blue-footer);
  color: #fff;
}

.footer__items {
  display: grid;
  gap: 1em;
}

.footer__logo {
  width: 150px;
  display: block;
  margin-bottom: 2em;
}

.footer__contact {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.footer__contact--second {
  margin-bottom: 1em;
}

.footer__icon {
  margin-top: 0px;
  width: 35px;
  height: 35px;
}

.footer__nav {
  margin-top: 2.5em;
  display: grid;
  gap: 0.8em;
}

.footer__link {
  color: #fff;
  text-decoration: none;
}

.footer__social {
  margin-top: 2em;
  margin: 0 auto;
}

.footer__media {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 1px solid;
  border-radius: 50%;
  margin-right: 0px;
}

.footer__media--last {
  margin-right: 0;
  width: 40px;
  height: 40px;
}

@media (min-width: 740px) {
  .footer__items {
    grid-template-columns: 2fr 1fr max-content max-content 1fr;
    gap: 2em;
  }

  .footer__nav {
    margin-top: 0;
  }

  .footer__media {
    margin-bottom: 1em;
  }

  .footer__social {
    margin-top: 0em;
  }

  .footer__media--last {
    margin-right: 0;
  }
}
</style>
