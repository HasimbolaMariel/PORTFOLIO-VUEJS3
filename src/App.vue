<template>
  <Header />
  <main class="pt-20">
    <HeroSection />
    <AboutMe/>
    <Education/>
    <Skills/>
    <Portfolio/>
    <Contact/>
  </main>
</template>

<script setup>
  import Header from './components/Header.vue'
  import HeroSection from './components/HeroSection.vue'
  import AboutMe from './components/AboutMe.vue'
  import Education from './components/Education.vue'
  import Skills from './components/Skills.vue'
  import Portfolio from './components/Portfolio.vue'
  import Contact from './components/Contact.vue'
</script>
