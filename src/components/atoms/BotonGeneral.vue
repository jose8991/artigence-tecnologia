<template>
    <input type="button" :value="title">
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    title: String,
})
</script>

<style scoped>
input[type="button"]{
    background: #FEBA0B;
    padding: 10px 30px;
    color: #59A642;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 1px 30px -5px #20202049;
    cursor: pointer;
    transition: box-shadow 500ms;
}
input[type="button"]:hover{
    box-shadow: 1px 1px 30px -5px #20202089;
}
</style>