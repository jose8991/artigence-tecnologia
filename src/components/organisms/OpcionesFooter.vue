<template>
    <div v-for="opcion in opciones" :key="opcion">
        <ItemFooterVue :title="opcion.titulo" :opciones="opcion.opciones"/>
    </div>
</template>

<script setup>
import ItemFooterVue from '@/components/molecules/ItemFooter.vue';
import datos from '@/data/lista-footer.json'
const opciones = datos;
</script>

<style scoped>

</style>