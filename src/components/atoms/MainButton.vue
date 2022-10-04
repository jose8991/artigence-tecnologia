<template>
  <router-link class="selected" :to="link">{{ title }}</router-link>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: String,
  link: String,
});
</script>

<style scoped>
.selected {
  background: var(--gradient);
  padding: 7px 20px;
  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 1px -5px #20202049;
  cursor: pointer;
  transition: box-shadow 500ms;
}
.selected:hover {
  box-shadow: 1px 1px -5px #20202089;
}
</style>
