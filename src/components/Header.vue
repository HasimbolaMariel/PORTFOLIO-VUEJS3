<template>
    <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <!-- Logo -->
        <h1 class="text-2xl font-bold text-blue-600 tracking-wider">Hasimbola</h1>
  
        <!-- Menu hamburger (mobile) -->
        <button @click="toggleMenu" class="md:hidden text-gray-700 focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
  
        <!-- Menu navigation -->
        <nav :class="['md:flex items-center space-x-8 text-lg font-medium', isOpen ? 'block' : 'hidden', 'absolute md:static bg-white md:bg-transparent top-full left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 text-center md:text-left']">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            :class="[
              'w-full block py-2 text-gray-700 relative after:block after:mt-1 after:h-0.5 after:bg-sky-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:text-sky-400 transition-all duration-300 ease-in-out',
              activeSection === link.id ? 'text-sky-500 after:scale-x-100' : ''
            ]"
            @click="isOpen = false"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isOpen = ref(false)
  const activeSection = ref('accueil')
  
  const links = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'about', label: 'À_propos' },
    { id: 'education', label: 'Éducation' },
    { id: 'skills', label: 'Compétences' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]
  
  function toggleMenu() {
    isOpen.value = !isOpen.value
  }
  
  function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]')
    let currentSection = 'accueil'
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section.getAttribute('id')
      }
    })
  
    activeSection.value = currentSection
  }
  
  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })
  </script>
  