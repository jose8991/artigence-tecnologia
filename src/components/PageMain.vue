<template>
  <div class="contenedor">
    <MainNavar />
    <MainHeader />
    <main class="main">
      <ServicesCard />
      <AbautCards />
      <MainService />
      <CommentCard />
      <SecundaryContact />
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
import MainNavar from "@/components/MainNavar.vue";
import MainHeader from "@/components/OrganismsPageMain/MainHeader.vue";
import ServicesCard from "@/components/OrganismsPageMain/ServicesCard.vue";
import AbautCards from "@/components/OrganismsPageMain/AbautCards.vue";
import MainService from "@/components/OrganismsPageMain/MainService.vue";
import CommentCard from "@/components/OrganismsPageMain/CommentCard.vue";
import SecundaryContact from "@/components/OrganismsPageMain/SecundaryContact.vue";
import MainFooter from "@/components/OrganismsPageMain/MainFooter.vue";
</script>

<style scoped>


.contenedor {
  font-family: var(--heading-font);
  background-color: var(--blue-main);
}

/* .hero *{
    outline: 1px solid #fff;
} */

/* part of the card service */
/* 
.container__backgroung-triangle{
    max-width: 1200px;
    height: 600px;
    margin: auto;
    background-color: aqua;
} */

/* final card */

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  overflow: hidden;
}
</style>
