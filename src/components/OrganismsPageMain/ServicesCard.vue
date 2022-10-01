<template>
       <div class="services__cards">

        <div class="service__card"  v-for="service in servicedata" :key="service">
          <div class="cover__service__card">
            <img :src="service.img" alt="" />
          </div>
          <h2 class="service__title">{{service.service}}</h2>
          <p>{{service.paragraph}}</p>
          <hr />
          <div class="footer__service__card">
            <h3 class="user__name">{{service.secondaryDegree}}</h3>
            <MainButton title="ir" :link="service.linkService" />
          </div>
        </div>
      </div>
</template>

<script setup>
import MainButton from "@/components/atoms/MainButton.vue";
import serviceData from "@/data/services.json";
const servicedata = serviceData;

</script>

<style  scoped>
.services__cards {
  padding-top: 20px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.service__card {
  width: 350px;
  margin: 10px;
  padding: 20px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  transition: all 300ms;
}
.service__card p {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 300;
  color: var(--white);
}
.service__card hr {
  margin-top: 30px;
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
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  color: var(--white);
}


.footer__service__card {
  margin-top: 10px;
  display: flex;
  color: #fff;
  justify-content: space-between;
}

.footer__service__card h3 {
  font-size: 15px;
  font-weight: 500;
}
@media (min-width: 740px) {
  .services__cards {
    margin-top: 100px;
    padding-bottom: 100px;
  }
}
</style>