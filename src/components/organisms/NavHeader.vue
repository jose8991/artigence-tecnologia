<template>
    <div class="container__nav">
        <nav id="nav">
            <ul>
                <div class="lista" v-for="opcion in opciones" :key="opcion">
                    <li><a :href="opcion.url">{{opcion.titulo}}</a></li>
                </div>
                <BotonHeader title="iniciar" link="registrarse" />
                <BotonHeader title="registrarse" link="inicar-seccion" />
               
            </ul>
        </nav>
    </div>
</template>

<script setup>
import BotonHeader from '@/components/atoms/BotonHeader.vue';
import DatosHeader from '@/data/lista-header.json';
const opciones = DatosHeader;
</script>

<style  scoped>
.container__nav {
    position: relative;
    height: 100%;
}

nav {
    height: 100%;
}

ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lista {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lista li {
    margin: 0px 20px;
    list-style: none;
}

.lista li a {
    color: #59A642;
    font-size: 14px;
}

.nav_mod {
    height: 70px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background: white;
}
</style>