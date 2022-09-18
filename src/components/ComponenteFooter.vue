<template>
    <footer>
        <div class="container__footer">
            <!-- muestra el logo y me dice el slogan de la pagina -->
            <div class="box__footer">
                <div class="logo">
                    <img src="@/assets/Images/logo-magtimus.png" alt="">
                </div>
                <div class="terms">
                    <p>prueba</p>
                </div>
            </div>
            <!-- me trae la lista de las opciones que tiene el footer -->
            <listaFooter/>
        </div>
        <!-- copiamos los derechos de autor -->
        <div class="box_copyright">
            <hr>
            <p> todos los derechos reservados © 2022 <b>propio</b></p>
        </div>
    </footer>
</template>

<script setup>
import listaFooter from '@/components/organisms/OpcionesFooter.vue'
</script>

<style scoped>

footer{
    width: 100%;
    padding: 50px 0px;
    *background-image: url('@/assets/Images/background-footer.svg');
    *background-size: cover;
    background-color: #04046e;
    -webkit-mask-image: url('@/assets/Images/background-footer.svg');
    mask-image: url('@/assets/Images/background-footer.svg');
    -webkit-mask-size:  cover;
    mask-size: cover;
}
.container__footer{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    max-width: 1200px;
    margin: auto;
    margin-top:100px;
}
.box__footer{
    display: flex;
    flex-direction:column;
    padding:40px;
}
.box__footer .logo img{
    width: 180px;
}

.box_copyright{
    max-width: 1200px;
    margin: auto;
    text-align:center;
}

.box_copyright p{
    margin-top: 20px;
    color: #59A642;
}

.box_copyright hr{
    border:none;
    height: 1px;
    background-color: #59A642;;
}

.box__footer .terms{
max-width: 350px;
margin-top: 20px;
font-weight: 500;
color: #59A642;
font-size: 18px;
}

</style>