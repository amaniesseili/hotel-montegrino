<script>
import TomTom from '../components/TomTom.vue';
export default {
  components:{
    TomTom
  },
  
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Qui  implemento la logica per inviare il messaggio al backend
      // utilizzando Axios per fare una richiesta POST a un'API Laravel
      // Dopo l'invio, mostra un messaggio di ringraziamento al cliente
      alert('Grazie! Il tuo messaggio è stato inviato con successo.');
    },
  },
};

</script>
<template>



    <div class="container-fluid bg-page ">
      <div class="row">
        <div class="col-md-6">
          <TomTom></TomTom>
          <!-- Mappa -->
          <!--  il tuo codice per la mappa  -->
        </div>
        <div class="col-md-6">
          <!-- Modulo di Contatto -->
          <div>
            <h2>Contattaci</h2>
            <p>Breve descrizione dell'hotel e indirizzo.</p>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Nome e Cognome</label>
                <input v-model="formData.name" type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Indirizzo Email</label>
                <input v-model="formData.email" type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Messaggio</label>
                <textarea v-model="formData.message" class="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Invia Messaggio</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  

</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.bg-page {
  margin-top: -1rem;
  padding: 4rem;
  background-color: $medium-background-color;
  height: calc(100vh - 13rem);
}
</style>