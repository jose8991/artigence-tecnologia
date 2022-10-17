<template>
    <h1>registro</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="contraseña" v-model="password"></p>
    <p><button @click="register">submit</button></p>
    <p><button @click="singInWithGoogle">entra con google</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {useRouter} from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const register = () => {
    createUserWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((userCredential) => {
        // Signed in 
        console.log(userCredential)
        console.log('usuario registrado')
        router.push('/')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        // ..
    });
}
const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>{
        console.log(result.user)
        router.push('/')
    })
    .catch((error)=>{
        console.log(error)
    })
}
</script>

<style lang="scss" scoped>

</style>