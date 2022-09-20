<template>
    <div class="container__card" v-for="card in cards" :key="card">
        <MoleculaCard :icono="card.icono" :descripcion="card.descripcion"
        :title="card.title" :link="card.link"/>
    </div>
</template>

<script setup>
import MoleculaCard from '@/components/molecules/MoleculaCards.vue';
import datos from '@/data/lista-cards.json'
const cards = datos;
</script>

<style scoped>
.container__card {
    max-width: 1200px;
    padding: 20px;
    padding-bottom: 40px;
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center
}
</style>