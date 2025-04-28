<template>
    <section id="skills" class="py-16 px-6 bg-white">
      <div ref="skillsSection" class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-12">Compétences</h2>
  
        <div class="grid md:grid-cols-2 gap-10">
          <div v-for="(skill, index) in skills" :key="index"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          >
            <div class="flex justify-between mb-2">
              <span class="text-gray-700 font-semibold">{{ skill.name }}</span>
              <span class="text-sky-600 font-bold">{{ skill.current }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                class="bg-gradient-to-r from-sky-400 to-sky-600 h-2 rounded-full transition-all duration-700 ease-out"
                :style="{ width: skill.current + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // Liste de compétences
  const skills = ref([
    { name: 'Laravel 10', percentage: 60, current: 0 },
    { name: 'Vue.js 3', percentage: 55, current: 0 },
    { name: 'HTML', percentage: 90, current: 0 },
    { name: 'CSS', percentage: 90, current: 0 },
    { name: 'JavaScript', percentage: 70, current: 0 },
    { name: 'PHP', percentage: 75, current: 0 },
    { name: 'MySQL', percentage: 80, current: 0 },
    { name: 'Java', percentage: 60, current: 0 },
    { name: 'Merise 2', percentage: 75, current: 0 },
    { name: 'UML', percentage: 80, current: 0 },
  ])
  
  const skillsSection = ref(null)
  let observer = null
  let intervals = []
  
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation()
        } else {
          resetSkills()
        }
      })
    }, {
      threshold: 0.5, // 50% de la section visible
    })
  
    if (skillsSection.value) {
      observer.observe(skillsSection.value)
    }
  })
  
  onUnmounted(() => {
    if (observer && skillsSection.value) {
      observer.unobserve(skillsSection.value)
    }
  })
  
  // Lance l'animation pour remplir
  function startAnimation() {
    skills.value.forEach((skill, index) => {
      skill.current = 0
      clearInterval(intervals[index]) // éviter plusieurs intervals empilés
      let counter = 0
      intervals[index] = setInterval(() => {
        if (counter < skill.percentage) {
          counter++
          skill.current = counter
        } else {
          clearInterval(intervals[index])
        }
      }, 15)
    })
  }
  
  // Réinitialise à zéro
  function resetSkills() {
    skills.value.forEach((skill, index) => {
      clearInterval(intervals[index])
      skill.current = 0
    })
  }
  </script>
  