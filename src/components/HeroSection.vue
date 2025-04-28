<template>
    <section
      class="
            h-[600px] bg-[url('/src/assets/images/fond.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center
            mt-[-10px]
            "
    >
      <div class="text-center text-white bg-black/40 p-6 rounded-lg">
            <h1 class="font-bold text-3xl md:text-5xl mb-2">
            Bonjour, je suis Hasimbola.
            </h1><br>
            <h2 class="text-xl md:text-2xl">
            Développeur web
            </h2><br><br>
             <!-- BOUTON CV -->
            <a
                :href="cvHasimbola" 
                class="
                    inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl
                     transition-all duration-300 ease-in-out transform hover:scale-105
                     "
                download
            >
                📄 Télécharger mon CV
            </a>
      </div>
    </section>
</template>
<script setup>
    import cvHasimbola from '@/cv/cv-hasimbola.pdf'
</script>

  