import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({
  duration: 1000, // durée de l'animation
  once: false,    // animation chaque fois qu'on scroll
  easing: 'ease-in-out' // Animation plus naturelle
})


const app = createApp(App)

// app.use(router)

app.mount('#app')
