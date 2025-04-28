<template>
    <div
      ref="cardRef"
      class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-700 opacity-0"
      :class="[
        animationDirection,
        { 'translate-y-0 opacity-100': visible }
      ]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
    >
      <!-- Date -->
      <div class="text-sky-500 font-bold text-lg mb-4">{{ formation.date }}</div>
  
      <!-- Titre diplôme -->
      <h3 class="text-gray-800 font-semibold mb-2">{{ formation.titre }}</h3>
  
      <!-- Lieu -->
      <p class="text-gray-500 text-sm mb-4">{{ formation.lieu }}</p>
  
      <!-- BOUTON Visiter -->
      <a
        href="#"
        class="mt-auto bg-sky-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-sky-500 transition-all duration-300"
      >
        Visiter le site
      </a>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const props = defineProps({
    formation: Object,
  })
  
  const visible = ref(false)
  const animationDirection = ref('translate-y-8')
  const cardRef = ref(null)
  
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visible.value = true
        }
      })
    }, {
      threshold: 0.2,
    })
  
    if (cardRef.value) {
      observer.observe(cardRef.value)
    }
  })
  </script>
  