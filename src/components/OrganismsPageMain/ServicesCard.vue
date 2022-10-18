<template>
  <div class="services__cards">
    <div class="service__efect" v-for="service in servicedata" :key="service">
      <div class="service__card">
        <div class="cover__service__card">
          <img :src="service.img" alt="" />
        </div>
        <h3 class="service__title">{{ service.service }}</h3>
        <p>{{ service.paragraph }}</p>
        <hr />
        <div class="footer__service__card">
          <MainButton title="ir" :link="service.linkService" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainButton from "@/components/atoms/MainButton.vue";
import serviceData from "@/data/services.json";
const servicedata = serviceData;
</script>

<style scoped>
.services__cards {
  padding-top: 10px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.service__efect {
  position: relative;
  width: 380px;
  height: 515px;
  margin: 15px;
  padding: 20px;
  background: #1c1c1c;
  border-radius: 8px;

  overflow: hidden;
}
.service__efect::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 515px;
  background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
  transform-origin: bottom right;
  animation: animate 10s linear infinite;
}
.service__efect::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 515px;
  background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
  transform-origin: bottom right;
  animation: animate 10s linear infinite;
  animation-delay: -5s;
}
.service__card {
  position: absolute;
  padding: 12px;
  inset: 2px;
  background: var(--blue-intro);
  z-index: 10;
  border-radius: 8px;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.service__card p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: var(--white);
}
.service__card hr {
  margin-top: 20px;
  border: none;
  height: 0.2px;
  background-color: #41414138;
}

.service__card:hover {
  transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -o-transform: translateY(-10px);
}

.service__card:hover .cover__service__card img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.cover__service__card {
  width: 100%;
  height: 180px;
  border-radius: 14px;
  -webkit-border-radius: 14px;
  -moz-border-radius: 14px;
  -ms-border-radius: 14px;
  -o-border-radius: 14px;
  overflow: hidden;
}
.cover__service__card img {
  width: 110%;
  transition: all 300ms;
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  -ms-transition: all 300ms;
  -o-transition: all 300ms;
}
.service__title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4em;
  margin-bottom: 1em;
  font-family: var(--heading-font);
  color: var(--white);
}

.footer__service__card {
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
