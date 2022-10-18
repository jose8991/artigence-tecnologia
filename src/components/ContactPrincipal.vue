<template>
  <body>
    <div class="content">

<h1 class="logo">Contactanos <br><span class="name">Artigence</span></h1>

<div class="contact-wrapper animated bounceInUp">
    <div class="contact-form">
        <h3>Completa los Datos</h3>
        <form action="">
            <p>
                <label>Nombre Completo</label>
                <input type="text" name="fullname">
            </p>
            <p>
                <label>Correo Electronico</label>
                <input type="email" name="email">
            </p>
            <p>
                <label>Numero celular</label>
                <input type="tel" name="phone">
            </p>
            <p>
                <label>Whatsaap</label>
                <input type="text" name="affair">
            </p>
            <p class="block">
               <label>Observaciones</label> 
                <textarea name="message" rows="3"></textarea>
            </p>
            <p class="block">
                <button>
                    Enviar
                </button>
            </p>
        </form>
    </div>
    <div class="contact-info">
        <h2>Nuestra Información</h2>
        <ul>
            <li><i class="fas fa-map-marker-alt"></i> Risaralda,Dosquebradas <br>
                        Laureles2 manzan8 casa2 <br>
                        C.P 661002</li>
            <li><i class="fas fa-phone"></i>+57 318 634 71 37 <br> +57 301 573 04 64</li>
            <li><i class="fas fa-envelope-open-text"></i>artigencei@gmail.com</li>
        </ul>
        <p>
          ¡Trabajemos Juntos! <br>
          Si deseas consultar mayor información sobre nuestros servicios o tienes alguna duda 
          al respecto, no dudes en llenar el cuestionario y nos contactaremos con usted</p>
        <p>artignence.com</p>
    </div>
</div>

</div>
 

  </body>
 
</template>

<script></script>

<style scoped>

 
 
* {
    box-sizing: border-box;
    
}
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1 auto;
  padding-top: 4em;
  /*max-width: 1000px;*/
  font: 1em/1.5 trebuchet ms, verdana, sans-serif;
  font-family: 'Quicksand', sans-serif;
  background: var(--blue-main);
  color:white;
  line-height: 1.6;
  padding: 0 1.5em;  
  min-height: 100vh;
 
}
html {
  --i: -1;
  --j: -1;
  --r: 0px;
  height: 100%;
  background: var(--blue-main);
  background-blend-mode: luminosity;
  
}
header {
  margin: 1rem;
  padding: 1em 0;
  border-radius: 0.5em;
  min-width: 95%;
  background: #fff;
  text-align: center;
  
}
.container {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5em;
    }



ul {
    list-style: none;
    padding: 0;
    
}

.logo {
    text-align: center;
    font-size: 3em;
}

.logo span {
    color: var(--blue-footer);
}

.contact-wrapper {
    box-shadow: 0 00 020px black;
    display: block;
}

.contact-wrapper > * {
    padding: 1em;
}

.contact-form {
    background: white;
    border: inset lightcyan;
    color:#0f414c;
}

.contact-form form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
}

.contact-form form label {
    display: block;
    
}

.contact-form form p {
    margin: 0;
    padding: 1em;

}

.contact-form form .block {
    grid-column: 1 / 3;
    
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea {
    width: 100%;
    height: 50px;
    padding: .7em;
    border: none;
    background: none;
    outline: 0;
    color:#0f414c;
    border-bottom: 1px solid var(--blue-main);
    border-radius: 20em;

}

.contact-form form button {
    background: var(--blue-footer);
    border: 1;
    text-transform: uppercase;
    padding: 1em;
    color:white;
    
}

.contact-form form button:hover,
.contact-form form button:focus {
    background:var(--cyangradient);
    color: var(--blue-footer);
    transition: background-color 1s ease-out;
    outline: 1;
    
}

/* CONTACT INFO */
.contact-info {
    background: var(--blue-footer);
   
}

.contact-info h4, .contact-info ul, .contact-info p {
    text-align: center;
    margin: 0 0 1rem 0;
}

/* LARGE SIZE */
@media(min-width: 700px) {
    body {
        padding: 0 4em;
    }
    .contact-wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .contact-wrapper > * {
        padding: 2em;
    }
    .contact-info h4,
    .contact-info ul,
    .contact-info p {
        text-align: left;
    }
}


.services__cards {
  padding-top: 10px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.service__efect {
  position: relative;
  width: 380px;
  height: 515px;
  margin: 15px;
  padding: 20px;
  background: #1c1c1c;
  border-radius: 8px;

  overflow: hidden;
}
.service__efect::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 515px;
  background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
  transform-origin: bottom right;
  animation: animate 10s linear infinite;
}
.service__efect::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 515px;
  background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
  transform-origin: bottom right;
  animation: animate 10s linear infinite;
  animation-delay: -5s;
}
.service__card {
  position: absolute;
  padding: 12px;
  inset: 2px;
  background: var(--blue-intro);
  z-index: 10;
  border-radius: 8px;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.service__card p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: var(--white);
}
.service__card hr {
  margin-top: 20px;
  border: none;
  height: 0.2px;
  background-color: #41414138;
}

.service__card:hover {
  transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -o-transform: translateY(-10px);
}

.service__card:hover .cover__service__card img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.cover__service__card {
  width: 100%;
  height: 180px;
  border-radius: 14px;
  -webkit-border-radius: 14px;
  -moz-border-radius: 14px;
  -ms-border-radius: 14px;
  -o-border-radius: 14px;
  overflow: hidden;
}
.cover__service__card img {
  width: 110%;
  transition: all 300ms;
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  -ms-transition: all 300ms;
  -o-transition: all 300ms;
}
.service__title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4em;
  margin-bottom: 1em;
  font-family: var(--heading-font);
  color: var(--white);
}

.footer__service__card {
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
