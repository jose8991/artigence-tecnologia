<template>
  <div class="main">
    <MainNavar />
    <contactus />
    <footerMain />
  </div>
</template>

<script setup>
import MainNavar from "@/components/MainNavar.vue";
import contactus from "@/components/ContactPrincipal.vue";
import footerMain from "@/components/OrganismsPageMain/MainFooter.vue";
</script>

<style scoped>
.main {
  background-color: var(--blue-intro);
  min-height: 100vh;
}
</style>
