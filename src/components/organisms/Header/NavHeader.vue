<template>
    <div class="container__nav">
        <nav id="nav">
            <ul>
                <BotonHeader/>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">HOW IT WORK</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import BotonHeader from '@/components/atoms/BotonHeader.vue';
</script>

<style  scoped>
.container__nav{
    position: relative;
    height: 100%;
}

nav{
    height: 100%;
}

nav ul{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul li{
    margin: 0px 20px;
    list-style: none;
}

nav ul li a{
    color: #59A642;
    font-size: 14px;
}

.nav_mod{
    height: 70px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background: white;
}
</style>