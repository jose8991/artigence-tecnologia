<template>
    <button type="submit" :@click="event">{{title}}</button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  event: String,
  title: String,
});
</script>
<style scoped>
button {
  background: var(--gradient);
  display: block;
  width: 100px;
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px auto;
  cursor: pointer;
}
</style>