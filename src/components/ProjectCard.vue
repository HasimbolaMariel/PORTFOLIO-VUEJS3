<template>
    <div
      class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-transform transform hover:scale-105"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <!-- Fond uni (ou image plus tard) -->
      <div :class="[ 'h-60 w-full']">
        <img :src="project.image" alt="" class="h-full w-full">
      </div>
  
      <!-- Hover overlay -->
      <div
        class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out" 
        :class="{'opacity-100': isMobile, 'opacity-0 group-hover:opacity-100': !isMobile}"
      >
        <h3 class="text-white font-bold text-2xl mb-2">{{ project.title }}</h3>
        <p class="text-gray-300 text-sm mb-4">{{ project.description }}</p>
        <div class="flex space-x-4">
          <a
            :href="project.lien"
             target="_blank" rel="noopener noreferrer"
            class="bg-white text-gray-800 font-semibold px-4 py-2 rounded hover:bg-gray-200 transform hover:scale-105 transition duration-300"
          >
            Visiter le site
          </a>
          <a
            :href="project.liengithub"
             target="_blank" rel="noopener noreferrer"
            class="bg-white text-gray-800 font-semibold px-4 py-2 rounded hover:bg-gray-200 transform hover:scale-105 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const isMobile = window.innerWidth <= 768

  defineProps({
    project: Object
  })
  </script>
  