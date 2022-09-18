<template>
    <header id="header">
        <div class="container__header">
            <div class="logo">
                <img src="@/assets/Images/logo-magtimus.png" alt="" />
            </div>
            <div class="container__nav">
                <nav>
                    <ul>
                        <BotonGeneral title="prueba" />
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <div class="container__all">
        <div class="cover">
            <div class="container__cover">
                <div class="container__info">
                    <h1>BIENVENIDOS</h1>
                    <h2>BUSINESS</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                    </p>
                    <BotonGeneral title="prueba" />
                </div>
                <div class="container__vector">
                    <img src="@/assets/Images/undraw_Code_thinking_re_gka2.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import NavHeader from '@/components/organisms/NavHeader.vue'
import BotonGeneral from '@/components/atoms/BotonGeneral.vue';

// mounted
//   window.addEventListener("scroll", this.onScroll)

</script>

<style scoped>

.container__nav {
    position: relative;
    height: 100%;
}

.cover {
    width: 100%;
    padding-bottom: 60px;
    margin-top: 100px;
}

.container__cover {
    max-width: 1200px;
    height: 1200px;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-image: url('@/assets/Images/background-cover.svg');
    background-size: cover;
    background-position: bottom;
}

.cover .container__info {
    max-width: 400px;
    margin-top: 40px;
    z-index: 2;
}

.cover h1 {
    max-width: 400px;
    font-size: 60px;
    font-weight: 900;
    color: #373737
}

.cover h2 {
    font-size: 60px;
    font-weight: 900;
    color: #FEBA0B;
    margin-top: -20px;
}

.cover p {
    margin-top: 10px;
    color: #373737;
    margin-bottom: 20px;

}

.container__vector {
    position: relative;
}

.container__vector img {
    width: 600px;
    position: absolute;
    bottom: 10px;
    right: 0px;
    animation: move_vector 6s ease-in-out infinite;
}


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

@keyframes move_vector {
    0% {
        transform: translatey(10px);
    }

    25% {
        transform: translatey(-10px);
    }

    100% {
        transform: translatey(10px);
    }
}

/* .selected{
    background: #9191F2;
    padding: 10px 30px;
    color: #59A642;
    border-radius: 20px;
} */
</style>
