<template>
  <body>
    <MainNavar/>
    <!-- <MainHeader/> -->
    <main class="main">
      <ServicesCard/>
      <AbautCards/>
      <MainService/>
      <CommentCard/>
      <SecundaryContact/>
    </main>
    <MainFooter/>
  </body>
</template>

<script setup>
import MainNavar from "@/components/OrganismsPageMain/MainNavar.vue";
// import MainHeader from "@/components/OrganismsPageMain/MainHeader.vue";
import ServicesCard from "@/components/OrganismsPageMain/ServicesCard.vue";
import AbautCards from "@/components/OrganismsPageMain/AbautCards.vue";
import MainService from "@/components/OrganismsPageMain/MainService.vue";
import CommentCard from "@/components/OrganismsPageMain/CommentCard.vue";
import SecundaryContact from "@/components/OrganismsPageMain/SecundaryContact.vue";
import MainFooter from "@/components/OrganismsPageMain/MainFooter.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap");

body {
  font-family: var(--body-font);
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
