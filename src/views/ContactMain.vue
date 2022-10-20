<template>
    <div class="main">
     <MainNavar/>
    <div style="text-align: center;">
        <contactus/>
    </div>
</div>
</template>

<script setup>
import MainNavar from "@/components/MainNavar.vue";
import contactus from "@/components/ContactPrincipal.vue";
</script>

<style scoped>
.main {
  margin: 0 auto;
  background-color: var(--blue-intro);
  height: 100vh;
}
</style>