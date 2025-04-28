<template>
  <section id="contact" class="min-h-screen flex flex-col bg-gray-100 p-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800">Contact</h2>
    </div>

    <div class="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-10 lg:gap-50 max-md:gap-5">
      
      <!-- Formulaire -->
      <div
        ref="formRef"
        class="bg-white p-8 rounded-lg shadow-lg flex-1 transform transition-all duration-700 opacity-0 translate-y-10"
        :class="{ 'translate-y-0 opacity-100': formVisible }"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Envoyez-moi un message</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium">Nom</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-sky-400 text-white font-bold py-3 rounded-lg hover:bg-sky-500 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      <!-- Carte Info -->
      <div
        ref="cardRef"
        class="bg-white p-8 rounded-lg shadow-lg flex-1 flex flex-col justify-between transform transition-all duration-700 opacity-0 translate-y-10"
        :class="{ 'translate-y-0 opacity-100 delay-200': cardVisible }"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="space-y-4 text-gray-700 text-justify">
          <h3 class="text-2xl font-semibold text-gray-800">Hasimbola</h3>
          <p class="text-sky-500 font-semibold">Full-stack Developer</p>
          <p><strong>Email </strong> randrianasoloniainamariel@gmail.com</p>
          <p><strong>Phone</strong> <br/> 032 04 985 12</p>
          <p><strong>Localisation </strong><br/> Toamasina, Madagascar</p>
        </div>

        <!-- Liens sociaux -->
        <div class="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/tonprofil" target="_blank" class="text-gray-800 hover:text-sky-400">
            <i class="fab fa-github text-2xl"></i>
          </a>
          <a href="mailto:randrianasoloniainamariel@gmail.com" class="text-gray-800 hover:text-sky-400">
            <i class="fas fa-envelope text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/tonprofil/" target="_blank" class="text-gray-800 hover:text-sky-400">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://facebook.com/tonprofil" target="_blank" class="text-gray-800 hover:text-sky-400">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
        </div>
      </div>

    </div>

    <!-- Copyright -->
    <div class="text-center text-gray-500 text-sm mt-12">
      © {{ new Date().getFullYear() }} Hasimbola. Tous droits réservés.
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      formVisible: false,
      cardVisible: false
    }
  },
  methods: {
    submitForm() {
      console.log(this.form);
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.formVisible = true
          this.cardVisible = true
        }
      })
    }, {
      threshold: 0.3,
    })

    if (this.$refs.formRef) {
      observer.observe(this.$refs.formRef)
    }
    if (this.$refs.cardRef) {
      observer.observe(this.$refs.cardRef)
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
