<template>
   <footer>

<div class="container__footer">
    <div class="box__footer">
        <div class="logo">
            <img src="@/assets/images_new_project/logo-no-background.png" alt="">
        </div>
        <div class="terms">
            <p>La inteligencia artificial es una herramienta
            para mejorar tu vida, con ella, podrás automatizar tareas tediosas, 
                obtener respuestas a preguntas de forma rápida y eficiente, y mucho más..</p>
        </div>
    </div>
    <div class="box__footer">
        <h2>Soluciones</h2>
        <a href="https://www.google.com">Desarrollo</a>
        <a href="#">Marketing</a>
        <a href="#">Educativos</a>
        <a href="#">inteligencia Artificial</a>
    </div>

    <div class="box__footer">
        <h2>Acerca de</h2>
        <a href="#">Mision</a>
        <a href="#">Vision</a>
        <a href="#">Contactenos</a>
        <a href="#">Informacion nuestra</a>              
    </div>

    <div class="box__footer">
        <h2>Redes Sociales</h2>
        <a href="https://www.facebook.com/profile.php?id=100086944389297"> <i class="fab fa-facebook-square"></i> Facebook</a>
        <a href="https://twitter.com/ArtigenceT"><i class="fab fa-twitter-square"></i> Twitter</a>
        <a href="https://www.linkedin.com/in/artigence-inteligencia-artificial-142baa253/"><i class="fab fa-linkedin"></i> Linkedin</a>
        <!--<a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>-->
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
    /* -webkit-mask-image: url('@/assets/images_new_project/background-footer.svg');
    mask-image: url('@/assets/images_new_project/background-footer.svg'); */
    /* -webkit-mask-size: cover;
    mask-size: cover; */
}

.container__footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    margin-top: 100px;
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
