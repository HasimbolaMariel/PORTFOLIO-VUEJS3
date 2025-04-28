<template>
  <section id="education" class="py-16 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-12">Formation</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <CarteEducation
          v-for="(formation, index) in formations"
          :key="index"
          :formation="formation"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CarteEducation from '@/components/CarteEducation.vue'

const formations = [
  {
    date: '2023 - 2024',
    titre: 'Master 1 en Mathématiques, Informatique et Applications, parcours Image et Interaction',
    lieu: 'Université de Toamasina',
  },
  {
    date: '2019 - 2023',
    titre: 'Licence en Mathématiques, Informatique et Applications - Académique en Informatique',
    lieu: 'Université de Toamasina',
  },
  {
    date: '2022 - 2023',
    titre: 'Développement Web Full Stack',
    lieu: 'Formation numérique chez Sayna',
  },
  {
    date: '2019',
    titre: 'Baccalauréat Série C',
    lieu: 'Lycée Razafindrabe Victorien Moramanga- Madagascar',
  },
]
</script>
