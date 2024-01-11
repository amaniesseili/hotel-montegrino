<!-- il componente Language switcher consente agli utenti di selezionare la lingua  -->
<script>
export default {
  props: {
    currentLanguage: Object, // Oggetto che rappresenta la lingua corrente
    languages: Array, // Array di lingue disponibili
  },
  methods: {
    changeLanguage(language) {
      // Funzione chiamata al cliccare su una lingua per cambiare la lingua
      // Implementa il cambiamento della lingua come necessario
      console.log('Cambiamento lingua:', language);
    },
  },
};
</script>


<template>
  <div class="language-switcher">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Lingua
      <span>
        <img :src="currentLanguage.flag" class="flags" :alt="currentLanguage.name" />
      </span>
    </a>
    <ul class="dropdown-menu p-1">
      <li v-for="language in languages" :key="language.code" class="montegrino-scroll-nav">
        <a @click="changeLanguage(language)" class="dropdown-item" href="#">
          <img :src="language.flag" class="flags" :alt="language.name" />
          {{ language.name }}
        </a>
      </li>
    </ul>
  </div>
</template>



<style scoped>
/* Stili CSS specifici per il componente */
.language-switcher {
  /* Aggiungi stili se necessario */
}
</style>