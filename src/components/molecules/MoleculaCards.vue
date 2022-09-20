<template>
    <div class="card c1">
        <div class="icon">
            <i :class="icono"></i>
        </div>
        <div class="info__description">
            <p>{{descripcion}}</p>
                <BotonPrincipal :title="title" :link="link"/>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';
import BotonPrincipal from '@/components/atoms/BotonHeader.vue'
defineProps({
    icono: String,
    descripcion: String,
    title: String,
    link: String
})

</script>

<style scoped>
    .card {
    width: 300px;
    position: relative;
    margin: 20px;
    font-family: 'Poppins', sans-serif;
    transition: all 300ms;
    border-radius: 20px;
}

.card:hover {
    box-shadow: 1px 1px 20px -10px #20202049;
}

.card:hover .info__description {
    margin-top: 0;
    border-radius: 0px 0px 20px 20px;

}

.card:hover .icon {
    margin-top: -110px;
    border-radius: 20px 20px 0px 0px;
}

.icon {
    width: 100%;
    height: 220px;
    background: #EFF3F5;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
    border-radius: 20px;
}

.icon i {
    font-size: 150px;
    color: #fff;
    transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
}

.info__description {
    width: 100%;
    height: 220px;
    color: #474747;
    background: #EFF3F5;
    padding: 20px;
    margin-top: -220px;
    transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
    border-radius: 20px;
}

.info__description p {
    font-size: 14px;
    margin-top: 10px;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    overflow: hidden;
}

.info__description input {
    margin-top: 20px;
    padding: 10px 40px;
    background: #2196f3;
    color: white;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 1px 30px -5px #20202049;
    transition: box-shadow 300ms;
}

.info__description input:hover {
    box-shadow: 1px 1px 30px -5px #20202070;
}



.c1:hover .icon {
    background: #DD4B25;
}

.c1 .icon i {
    color: #DD4B25;
}

.c1:hover .icon i {
    color: #fff;
}


.c2:hover .icon {
    background: #146EB0;
}

.c2 .icon i {
    color: #146EB0;
}

.c2:hover .icon i {
    color: #fff;
}


.c3:hover .icon {
    background: #E8B600;
}

.c3 .icon i {
    color: #E8B600;
}

.c3:hover .icon i {
    color: #fff;
}
</style>