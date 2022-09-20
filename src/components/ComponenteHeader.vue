<template>
    <header id="header">
        <div class="container__header">
            <div class="logo">
                <img src="@/assets/Images/smartgates.png" alt="">
            </div>
            <NavPrueba/>
        </div>
    </header>
</template>

<script setup>
import NavPrueba from "@/components/organisms/NavHeader.vue";
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

header{
    width: 100%;
    height: 100px;
    font-family: 'Poppins', sans-serif;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;

    transition: all 300ms;
    background-color: #04046e;
}

.container__header{
    max-width: 1200px;
    height: 100%;  
    display: flex;
    justify-content: space-between; 
    margin: auto;
    padding: 0px 20px;
}

header .logo{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img{
    width: 150px;
}

.nav_mod{
    height: 70px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background: white;
}
</style>