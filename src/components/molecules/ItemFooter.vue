<template>
    <div class="box__footer">
        <h2>{{ title }}</h2>
        <li v-for="opcion in opciones" :key="opcion">
            <a :href="opcion.link">{{opcion.descripcion}}</a>
        </li>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    title: String,
    opciones: Array
})
</script>

<style>  

.box__footer h2{
    margin-bottom: 30px;
    color: #343434;
    font-weight: 700;
}

.box__footer a{
    margin-top:10px;
    color: #7a7a7a;
    font-weight: 600;
}

.box_footer a:hover{
    opacity: 0.8;
}

.box__footer li {
list-style: none;
padding-top: 10px;
}

</style>