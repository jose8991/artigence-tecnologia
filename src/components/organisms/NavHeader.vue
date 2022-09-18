<template>
    <div class="container__nav">
        <nav>
            <ul>
                <BotonHeaderVue />
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import BotonHeaderVue from '@/components/atoms/BotonHeader.vue';
</script>

<style scoped>
nav {
    height: 100%;
}

nav ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

nav ul li {
    margin: 0px 20px;
}

nav ul li a {
    color: #59A642;
    font-size: 14px;
}

.nav_mod {
    height: 70px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background-color: white;
}
</style>