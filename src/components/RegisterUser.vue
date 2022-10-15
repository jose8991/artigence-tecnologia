<template>
  <MainNavar />
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
        <form action="" class="formulario__register" @submit.prevent="(register(email.value,password.value))">
          <h2>Regístrarse</h2>
          <input type="text" placeholder="Correo Electronico" />
          <input type="text" v-model="email" placeholder="Usuario" />
          <input type="password" v-model="password" placeholder="Contraseña" />
          <input type="password" v-model="repassword" placeholder="repetir contraseña" />
          <button>Regístrarse</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
// import MainNavar from '@/components/OrganismsPageMain/MainNavar.vue';
//Ejecutando funciones
import registerAndLogin from '@/components/modules/RegisterLogin.js';
// import { ref } from "vue";
// import {db} from "@/components/modules/conectFirebase.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   } from "firebase/auth";


//     let email=ref('');
//     let password=ref('');
//     let repassword=ref('');
//     let errorMessage=ref('');


//      function register(email, password) {
//         const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//             alert('¡Registrado!');
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             console.log(errorCode);
//             errorMessage.value = error.message;
//             alert(errorMessage.value);
//             // ..
//         });
//       }

    //   function login( email, password ) {
    //    const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         alert('¡Sesión iniciada!');
    //         // Signed in
    //         const user = userCredential.user;
    //         // ...
    //         })
    //     .catch((error) => {
    //     const errorCode = error.code;
    //     this.errorMessage = error.message;
    //     alert(this.errorMessage);
    //     });
    //     }
    //   function signout () {
    //    const auth = getAuth();
    //   signOut(auth).then(() => {
    //     alert('¡Sesión cerrada! Inicia sesión.');
    //   }).catch((error) => {
    //   });
    //  }




console.log(registerAndLogin);
</script>

<style scoped>
main {
  background: rgb(23, 25, 51);
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  margin: auto;
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
  background-color: var(--blue-intro);
  border-radius: 25px;
  box-shadow: 3px 5px 5px rgb(13, 14, 36);
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

.contenedor__login-register {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 380px;
  position: relative;
  top: -185px;
  left: 10px;

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
    padding-top: 20px;
    padding-bottom: 100px;
    background: var(--blue-main);
  }

  .contenedor__login-register {
    margin-top: 10px;
    padding: 10px;
    border-radius: 25px;
    border: 1px solid black;
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

  .contenedor__login-register {
    top: -10px;
    left: -5px;
    margin: auto;
  }

  .contenedor__login-register form {
    position: relative;
  }
}

input {
  border-radius: 10px;
}

button {
  border-radius: 10px;
}
</style>
