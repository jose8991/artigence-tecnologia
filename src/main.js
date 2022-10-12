import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  '@/assets/Images/colors.css'
import  "@/components/modules/responsive-lerpw-css.js";

createApp(App).use(router).mount('#app')
