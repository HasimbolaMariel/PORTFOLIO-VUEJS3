<template>
    <section id="portfolio" class="py-16 px-6 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-12">Portfolio</h2>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import ProjectCard from '@/components/ProjectCard.vue'
  import blackPanther from '@/assets/images/portfolio/black-panther.PNG'
  import batman from '@/assets/images/portfolio/batman.PNG'
  import portfolio from '@/assets/images/portfolio/portfolio.PNG'


  
  const projects = [
    { title: 'Site Portfolio Vue.js', description: 'Portfolio interactif développé avec Vue 3.', image:  portfolio },
    { title: 'Batman', description: 'Site vitrine responsive HTML5/CSS3.', image:  batman, lien: 'https://batman-hasimbola.vercel.app/', liengithub: 'https://github.com/HasimbolaMariel/SAYNA-HTMLCSS-BATMAN1'},
    { title: 'Black-Panther', description: 'Site vitrine responsive HTML5/CSS3.', image:  blackPanther, lien: 'https://black-panther-hasimbola.vercel.app/', liengithub: "https://github.com/HasimbolaMariel/SAYNA-JSTSCANVAS-PANTHER-072022"},
    
  ]
  </script>
  