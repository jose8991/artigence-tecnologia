<template>
 
  <main>
    <div class="contenedor__todo">
      <div class="caja__trasera">
        <div class="caja__trasera-login">
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Inicia sesión para entrar en la página</p>
          <button id="btn__iniciar-sesion">Iniciar Sesión</button>
        </div>
        <div class="caja__trasera-register">
          <h3>¿Aún no tienes una cuenta?</h3>
          <p>Regístrate para que puedas iniciar sesión</p>
          <button id="btn__registrarse">Regístrarse</button>
        </div>
      </div>

      <!--Formulario de Login y registro-->
      <div class="contenedor__login-register">
        <!--Login-->
        <form action="" class="formulario__login">
          <h2>Iniciar Sesión</h2>
          <input type="text" placeholder="Correo Electronico" />
          <input type="password" placeholder="Contraseña" />
          <button>Entrar</button>
        </form>

        <!--Register-->
        <form action="" class="formulario__register">
          <h2>Regístrarse</h2>
          <input type="text" placeholder="Nombre completo" />
          <input type="text" placeholder="Correo Electronico" />
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Regístrarse</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
// import MainNavar from '@/components/OrganismsPageMain/MainNavar.vue';
//Ejecutando funciones
console.log("hola entro correctamente");
setTimeout(() => {
  document
    .getElementById("btn__iniciar-sesion")
    .addEventListener("click", iniciarSesion);
  document
    .getElementById("btn__registrarse")
    .addEventListener("click", register);
  window.addEventListener("resize", anchoPage);

  //Declarando variables
  var formulario_login = document.querySelector(".formulario__login");
  var formulario_register = document.querySelector(".formulario__register");
  var contenedor_login_register = document.querySelector(
    ".contenedor__login-register"
  );
  var caja_trasera_login = document.querySelector(".caja__trasera-login");
  var caja_trasera_register = document.querySelector(".caja__trasera-register");

  //FUNCIONES

  function anchoPage() {
    if (window.innerWidth > 850) {
      caja_trasera_register.style.display = "block";
      caja_trasera_login.style.display = "block";
    } else {
      caja_trasera_register.style.display = "block";
      caja_trasera_register.style.opacity = "1";
      caja_trasera_login.style.display = "none";
      formulario_login.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_register.style.display = "none";
    }
  }

  anchoPage();

  function iniciarSesion() {
    if (window.innerWidth > 850) {
      formulario_login.style.display = "block";
      contenedor_login_register.style.left = "10px";
      formulario_register.style.display = "none";
      caja_trasera_register.style.opacity = "1";
      caja_trasera_login.style.opacity = "0";
    } else {
      formulario_login.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_register.style.display = "none";
      caja_trasera_register.style.display = "block";
      caja_trasera_login.style.display = "none";
    }
  }

  function register() {
    if (window.innerWidth > 850) {
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "410px";
      formulario_login.style.display = "none";
      caja_trasera_register.style.opacity = "0";
      caja_trasera_login.style.opacity = "1";
    } else {
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_login.style.display = "none";
      caja_trasera_register.style.display = "none";
      caja_trasera_login.style.display = "block";
      caja_trasera_login.style.opacity = "1";
    }
  }
}, 0);
</script>

<style scoped>

main {
    background: red;
  width: 100%;
  padding: 20px;
  margin:  auto;
  
}

.contenedor__todo {
  width: 100%;
  max-width: 800px;
  margin: auto;
  position: relative;
}

.caja__trasera {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: var(--blue-main);
}

.caja__trasera div {
  margin: 100px 40px;
  color: white;
  transition: all 500ms;
}

.caja__trasera div p,
.caja__trasera button {
  margin-top: 30px;
}

.caja__trasera div h3 {
  font-weight: 400;
  font-size: 26px;
}

.caja__trasera div p {
  font-size: 16px;
  font-weight: 300;
}

.caja__trasera button {
  padding: 10px 40px;
  border: 2px solid #fff;
  font-size: 14px;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  color: white;
  outline: none;
  transition: all 300ms;
}

.caja__trasera button:hover {
  background: #fff;
  color: #46a2fd;
}

/*Formularios*/

.contenedor__login-register {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 380px;
  position: relative;
  top: -185px;
  left: 10px;

  /*La transicion va despues del codigo JS*/
  transition: left 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.contenedor__login-register form {
  width: 100%;
  padding: 80px 20px;
  background: white;
  position: absolute;
  border-radius: 20px;
}

.contenedor__login-register form h2 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: var(--blue-gradient);
}

.contenedor__login-register form input {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border: none;
  background: #f2f2f2;
  font-size: 16px;
  outline: none;
}

.contenedor__login-register form button {
  padding: 10px 40px;
  margin-top: 40px;
  border: none;
  font-size: 14px;
  background: var(--gradient);
  font-weight: 600;
  cursor: pointer;
  color: white;
  outline: none;
}

.formulario__login {
  opacity: 1;
  display: block;
}
.formulario__register {
  display: none;
}

@media screen and (max-width: 850px) {
  main {
    margin-top: 50px;
  }

  .caja__trasera {
    max-width: 350px;
    height: 300px;
    flex-direction: column;
    margin: auto;
  }

  .caja__trasera div {
    margin: 0px;
    position: absolute;
  }

  /*Formularios*/

  .contenedor__login-register {
    top: -10px;
    left: -5px;
    margin: auto;
  }

  .contenedor__login-register form {
    position: relative;
  }
}
</style>
