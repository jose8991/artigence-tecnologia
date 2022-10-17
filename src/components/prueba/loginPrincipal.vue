<template>
    <h1>entrar</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="contraseña" v-model="password"></p>
    <p v-if="errMgs">{{errMgs}}</p>
    <p><button @click="login">submit</button></p>
    <p><button @click="singInWithGoogle">entra con google</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const email = ref('')
const password = ref('')

const errMgs= ref('')
const login = () => {
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((userCredential) => {
        // Signed in 
        console.log(userCredential)
        console.log('usuario registrado')
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
const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>{
        console.log(result.user)
    })
    .catch((error)=>{
        console.log(error)
    })
}
</script>

<style lang="scss" scoped>

</style>