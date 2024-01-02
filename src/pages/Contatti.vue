<script>
import TomTom from '../components/TomTom.vue';
export default {
  components: {
    TomTom,
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

        <div>
          <h2>Entra in Contatto con Noi</h2>
          <p class="me-5">Per assistenza, ti invitiamo a contattarci tramite telfono, inviarci e-mail o visitare il nostro forum.
            Garantiamo una pronta risposta alla tua richiesta.</p>
          <!-- phone,address,email -->
          <div class="row">

            <div class="col-12 col-md-4">
              <div class="contact-column">
                <i class="fas fa-phone"></i>
                <h5>Telefono</h5>
                <p>0039 03321503155</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="contact-column ">
                <i class="fas fa-map-marker-alt "></i>
                <h5>Indirizzo</h5>
                <p>Via Cadorna, 26, 21010, <br> Montegrino Valtravaglia VA</p>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <div class="contact-column ">
                <i class="fas fa-envelope"></i>
                <h5>Email</h5>
                <p>info@hotelmontegrino.it</p>
              </div>
            </div>
          </div>
          <!-- ------------------------ -->

          <!-- Modulo di Contatto -->

          <form class=" mt-1 me-5" @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Nome e Cognome *</label>
              <input v-model="formData.name" type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Indirizzo Email *</label>
              <input v-model="formData.email" type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Messaggio *</label>
              <textarea v-model="formData.message" class="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn send-mess-btn">Invia Messaggio</button>
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
  padding: 2rem;
  background-color: $medium-background-color;
  height: calc(100vh - 13rem);
}

.send-mess-btn {
  background-color: $primary-color;
  color: white;
  padding: 10px 30px;
  font-size: 1.2em;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.send-mess-btn:hover {
  background-color: #4CAF50;
  color: white;
}


.contact-column {
  border-left: 2px solid $primary-color;
  padding-left: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  i {
    font-size: 2rem;
    padding-bottom: 1rem;
    color: $primary-color;
  }
}
</style>