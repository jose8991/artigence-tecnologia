<template>
    <header class="hero">
      <div class="hero__wave"></div>

      <section class="hero__main container">
         <img
          src="@/assets/images_new_project/illustration-intro.png"
          class="hero__img"
        />

        <h1 class="hero__title">title eeeeeee eeeeeeeeeeeeeee eeeeeeeeeeee</h1>
         <p class="hero__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad, iste provident porro et corporis id aliquid aut libero, praesentium quam commodi. Ratione voluptatem voluptatum doloribus. Error adipisci distinctio beatae.
        </p>
        <!-- <a href="#" class="hero__cta"> enviar </a>  -->
      </section>
    </header>
</template>

<script setup>
      
</script>

<style  scoped>
.hero__main {
  color: #fff;
  display: grid;
  gap: 1.5em;
  text-align: center;
  position: relative;
}
.hero__img {
  position: relative;
  bottom: 10px;
  right: 0px;
  width: 100%;
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
  color: red;
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
  .hero__img{
    object-fit: contain;
  }
}
</style>