<template>
   <footer>

<div class="container__footer">
    <div class="box__footer">
        <div class="logo">
            <img src="@/assets/images_new_project/logo-no-background.png" alt="">
        </div>
        <div class="terms">
            <p>La era digital en nuestra tecnologia de inteligencia artificial ayudara a ser facil la vida de muchas personas.</p>
        </div>
    </div>
    <div class="box__footer">
        <h2>Soluciones</h2>
        <a href="https://www.google.com">App Desarrollo</a>
        <a href="#">App Marketing</a>
        <a href="#">IOS Desarrollo</a>
        <a href="#">Android Desarrollo</a>
    </div>

    <div class="box__footer">
        <h2>Compañia</h2>
        <a href="#">Acerca de</a>
        <a href="#">Trabajos</a>
        <a href="#">Procesos</a>
        <a href="#">Servicios</a>              
    </div>

    <div class="box__footer">
        <h2>Redes Sociales</h2>
        <a href="#"> <i class="fab fa-facebook-square"></i> Facebook</a>
        <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
        <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
    </div>

</div>

<div class="box__copyright">
    <hr>
    <p>Todos los derechos reservados © 2022 <b>ARTIGENCETECNOLOGIA</b></p>
</div>
</footer>

</template>

<script></script>

<style scoped>
footer{
    width: 100%;
    padding: 50px 0px;
    /* *background-image: url('@/assets/images_new_project/background-footer.svg'); */
    *background-size: cover;
    
    background-color:var(--blue-footer);

}

.container__footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
}

.box__footer{
    display: flex;
    flex-direction: column;
    padding: 40px;
}

.box__footer .logo img{
    width: 180px;
}

.box__footer .terms{
    max-width: 350px;
    margin-top: 20px;
    font-weight: 500;
    color: #7a7a7a;
    font-size: 18px;
}

.box__footer h2{
    margin-bottom: 30px;
    color: #343434;
    font-weight: 700;
}

.box__footer a{
    margin-top: 10px;
    color: #7a7a7a;
    font-weight: 600;
}

.box__footer a:hover{
    opacity: 0.8;
}

.box__footer a .fab{
    font-size: 20px;
}

.box__copyright{
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 0px 40px;
}

.box__copyright p{
    margin-top: 20px;
    color: #7a7a7a;
}

.box__copyright hr{
    border: none;
    height: 1px;
    background-color: #7a7a7a;
}
</style>
