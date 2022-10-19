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
<!--
      <article>
      <h3>Yogi Bear</h3>
      <section>
        <p>Smaaaarter than the average bear!</p>
        <a href="#">go</a>
      </section>
    </article>
    <article>
      <h3>Boo Boo</h3>
      <section>
        <p>The ranger isn't going to like this...</p>
        <a href="#">go</a>
      </section>
    </article>
    <article>
      <h3>Cindy Bear</h3>
      <section>
        <p>Oh, that's Yogi...</p>
        <a href="#">go</a>
      </section>
    </article>
    <article>
      <h3>Ranger Smith</h3>
      <section>
        <p>Stole a picnic basket?! Yogiii!!!</p>
        <a href="#">go</a>
      </section>
    </article>-->
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
  height: 100vh;
 
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

/* article {
  overflow: hidden;
  margin: 1rem;
  width: 21em;
  min-width: 15rem;
  border-radius: 3em;
  border: solid var(--blue-gradient);
}
article:nth-of-type(1) {
  --c0: #0f414c;
  --c1: #79e9fd;
}
article:nth-of-type(2) {
  --c0: #0f414c;
  --c1: #79e9fd;
}
article:nth-of-type(3) {
  --c0: #0f414c;
  --c1: #79e9fd;
}
article:nth-of-type(4) {
  --c0: #0f414c;
  --c1: #79e9fd;
}

h3,
section {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
}
h3:before,
section:before {
  position: absolute;
  z-index: -1;
  top: calc(var(--j) * 1rem + (1 + var(--j)) * 50% - var(--r));
  left: calc(var(--i) * 1rem + (1 + var(--i)) * 50% - var(--r));
  padding: var(--r);
  border-radius: 50%;
  box-shadow: 0 0 0 50em;
  content: "";
}

h3:before,
section {
  color: var(--c1);
}

h3 {
  justify-content: center;
  color: #fff;
  font-size: 1.75em;
  text-align: center;
  min-height: var(--r);
}
h3:before {
  opacity: 0.65;
}

section {
  justify-content: space-between;
  min-height: calc(var(--r) - 1rem);
}
section:before {
  color: var(--c0);
}

p {
  margin-right: 1em;
  font-size: 0.875em;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}
a:after {
  content: " ▶";
}

@media (min-width: 34rem) {
  html {
    --r: 4rem;
  }

  header {
    position: relative;
  }
  header:before,
  header:after {
    position: absolute;
    left: 50%;
    content: "";
  }
  header:before {
    top: 100%;
    width: calc(0.0625 * var(--r));
    height: calc(2 * var(--r) + 1rem);
    transform: translate(-50%);
    background: inherit;
  }
  header:after {
    top: calc(3 * 1rem + 3.125 * var(--r));
    border: solid calc(0.375 * var(--r)) transparent;
    padding: calc(0.375 * var(--r));
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #fff;
    background: #fff padding-box;
  }

  article {
    width: 40%;
  }
  article:nth-of-type(-n + 2) {
    --j: 1;
  }
  article:nth-of-type(odd) {
    --i: 1;
  }
  article:nth-of-type(-n + 2) h3:before,
  article:nth-of-type(n + 3) section:before {
    --r: 0;
  }
  article:nth-of-type(-n + 2) section,
  article:nth-of-type(n + 3) h3 {
    padding-right: calc(0.5 * (1 + var(--i)) * (var(--r) - 1rem) + 0.5rem);
    padding-left: calc(0.5 * (1 - var(--i)) * (var(--r) - 1rem) + 0.5rem);
  }
}*/
</style>
