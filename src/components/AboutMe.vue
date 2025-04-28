<template>
  <section id="about" class="py-20 px-6 bg-gray-50">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <!-- 📸 IMAGE en carte (40%) -->
      <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center md:basis-2/5 w-full">
        <img
          :src="monImage"
          alt="Photo de Hasimbola"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <!-- 📝 TEXTE (60%) -->
      <div class="text-justify md:text-left md:basis-3/5 w-full">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">À propos de moi</h2>
        <p class="text-gray-600 leading-relaxed text-lg text-justify">
          Je suis <span class="font-semibold text-blue-600">Hasimbola</span>, un développeur web passionné spécialisé en
          <span class="font-semibold">Laravel 10</span> et <span class="font-semibold">Vue.js 3</span>.  
          Après avoir suivi une formation académique en informatique à l'<span class="font-semibold">Université de Toamasina</span>,
          j'ai développé une expertise solide dans la création d'applications web modernes, performantes et esthétiques.
        </p>

        <p class="text-gray-600 leading-relaxed text-lg mt-4 text-justify" >
          Mon objectif est de transformer les idées en projets réels et efficaces, en alliant créativité, rigueur technique et passion du développement.
          Que ce soit pour des sites vitrines, des applications complexes ou des projets sur mesure, je m'engage à offrir le meilleur de la technologie.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import monImage from '@/assets/images/Me.jpg'
</script>
