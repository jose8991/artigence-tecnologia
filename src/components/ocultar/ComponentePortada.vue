<template>
    <div class="container__all">
        <div class="cover">
            <!-- inicio -->
            <div class="bg_color"></div>>  
            <!-- final -->

            <div class="container__cover">
                <div class="container__info">
                    <h1>portaaaaada</h1>
                    <h2>SMARTGATES</h2>
                    <h3>
                        La inteligencia artificial a tu servicio para un mejor futuro.
                    </h3>
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
import BotonGeneral from '@/components/atoms/BotonHeader.vue';
</script>

<style scoped>
.cover {
    width: 100%;
    padding-bottom: 60px;
    margin-top: 100px;
}
h3{
    padding: 20px 0px;
}
.container__cover {
    max-width: 1200px;
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
</style>