<template>
    <MainNavar/>
    <div class="container">
      <div class="box">
        <div class="form">
          <h2>INGRESAR</h2>
          <div class="inputBox">
              <input type="text" v-model="email_login" required="required">
              <span>Correo electronico</span>
              <i></i>
          </div>
          <div class="inputBox">
              <input type="password" v-model="password_login" required="required">
              <span>Contraseña</span>
              <i></i>
          </div>
          <div class="links">
              <a href="/registrarse">registrarse</a>
          </div>
          <input type="submit" @click="login"   value="Ingresar">
        </div>
        <h1>{{errMgs}}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
import MainNavar from '@/components/OrganismsPageMain/MainNavar.vue';
//Ejecutando funciones
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {useRouter} from 'vue-router'


const router = useRouter()
const email_login = ref('')
const password_login = ref('')


const errMgs= ref('')

const login = () => {
    signInWithEmailAndPassword(getAuth(),email_login.value,password_login.value)
    .then((userCredential) => {
        // Signed in 

        console.log(userCredential)
        console.log('usuario registrado')
        router.push('/')
        // ...
    })
    .catch((error) => {
        console.log(error.code)
        switch(error.code){
            case 'auth/invalid-email':
                errMgs.value = 'email invalido'
                break;
            case 'auth/user-not-found':
                errMgs.value = 'usuario no encontrado'
                break;
            case 'auth/wrong-password':
                errMgs.value = 'contraseña incorrecta'
                break;
            default:
                errMgs.value = 'usuario o contraseña incorrecta'
                break;
            
        }
        // ..
    });
}



  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--blue-intro);
  }
  .box {
    position: relative;
    width: 400px;
    height: 400px;
    margin: 15px;
    padding: 20px;
    background: #1c1c1c;
    border-radius: 8px;
    overflow: hidden;
  }
  .box::before {
      content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 400px;
    height: 400px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 8s linear infinite;
  
  }
  
  .box::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 400px;
    height: 400px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 8s linear infinite;
    animation-delay: -4s;
  }
  .form {
    position: absolute;
    padding: 12px;
    inset: 2px;
    background: var(--blue-intro);
    z-index: 10;
    border-radius: 8px;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
  }
  
  .form h2 {
    color: #45f3ff;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
  }
  .inputBox{
      position: relative;
      width: 300px;
      margin-top: 35px;
  }
  .inputBox input{
      position: relative;
      width: 100%;
      padding: 15px 10px 10px;
      background: transparent;
      border: none;
      outline: none;
      color: white;
      font-size: 1em;
      letter-spacing: 0.05em;
  }
  .inputBox span{
      position: absolute;
      left: 0;
      padding: 10px 10px 10px;
      font-size: 1em;
      color: white;
      top: 10px;
      /* color: #45f3ff; */
      font-size: 1em;
      letter-spacing: 0.05em;
      transition: 0.5s;
      border-bottom: 4px;
      transition: 0.5s;
      pointer-events: none;
  }
  .links{
      display: flex;
      justify-content: space-between;
  }
  .links a{
      margin: 10px 0;
      font-size: 0.75em;
      color: white;
      text-decoration: none;
  }
  .links a:hover,
  .links a:nth-child(2){
      color: #45f3ff;
  }
  
  .inputBox input:valid ~ span,
  .inputBox input:focus ~ span
  {
      color: #45f3ff;
      transform: translateY(-36px);
      font-size: 0.75em;
  }
  .inputBox i{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #45f3ff;
  }
  
  input[type="submit"]{
      position: relative;
      border: none;
      outline: none;
      background: #45f3ff;
      padding: 11px 25px;
      width: 100px;
      margin-top: 10px;
      border-radius: 8px;
      font-weight: 600;
  }
  
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  