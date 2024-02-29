<script>
import TomTom from '../components/TomTom.vue';
//import axios from 'axios';

export default {
  components: {
    TomTom,
  },
  data() {
    return {
      isTomTomActive: true,
      formData: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
      errorMessage: null,
    };
  },
  methods: {
    submitForm() {
      emailjs.send('service_87ulvgc', 'template_6t3apvo', this.formData)
        .then(response => {
          console.log('Email inviata con successo:', response);
          this.submitted = true;
          this.showConfirmationMessage();
        })
        .catch(error => {
          console.error('Errore nell\'invio dell\'email:', error);
          this.errorMessage = "Si è verificato un errore durante l'invio dell'email. Si prega di riprovare più tardi.";
        });
    },
    showConfirmationMessage() {
      const confirmationMessage = document.createElement('div');
      confirmationMessage.classList.add('confirmation-message');
      /*confirmationMessage.innerHTML = `
        <img src="/logo-montegrino.JPG" alt="Hotel Logo" />
        <p>Grazie per averci contattato!</p>
        <p>Riceverai una risposta entro 24 ore.</p>
      `;*/
      document.body.appendChild(confirmationMessage);
    }
  },
};
</script>
<template>
  <div class="page-content ">
  <div class="container-fluid bg-page">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6">
            <!-- Mappa -->
            <TomTom v-if="isTomTomActive" />


      </div>
      <div class="col-12 col-md-12 col-lg-6">

        <div class="contact-us">
          <h2 class="mt-1">{{ $t('contactsTitle') }}</h2>
          <p class="me-5">{{ $t('contactsDescription') }}</p>
          <!-- phone,address,email -->
          <div class="row">

            <div class="col-12 col-md-4 mb-1">
              <div class="contact-column h-100">
                <i class="fas fa-phone"></i>
                <h5>{{ $t('contact.phone') }}</h5>
                <p>0039 03321503155</p>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-1">
              <div class="contact-column h-100">
                <i class="fas fa-map-marker-alt "></i>
                <h5>{{ $t('contact.address') }}</h5>
                <p>Via Cadorna, 26, 21010, <br> Montegrino Valtravaglia VA</p>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-1">
              <div class="contact-column h-100">
                <i class="fas fa-envelope"></i>
                <h5>{{ $t('contact.email') }}</h5>
                <p>info@hotelmontegrino.it</p>
              </div>
            </div>
          </div>
          <!-- ------------------------ -->

          <!-- Modulo di Contatto -->
          <div class="row">
            <div class="col">

              <form class=" mt-4 me-5" @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label">{{ $t('contact.form.name_label') }}</label>
                  <input v-model="formData.name" type="text" class="form-control" id="name" required>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">{{ $t('contact.form.email_label') }}</label>
                  <input v-model="formData.email" type="email" class="form-control" id="email" required>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">{{ $t('contact.form.message_label') }}</label>
                  <textarea v-model="formData.message" class="form-control" id="message" rows="4" required></textarea>
                </div>

                <button type="submit" class="btn send-mess-btn">{{ $t ('inviaMessaggio')}}</button>
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
              </form>
              
              <div class="confirmation-message" v-if="submitted">
                <img src="/logo-montegrino.JPG" class="logo" alt="Hotel Logo" />
                <h4>{{ $t ('confirmationMessageTitle') }}</h4>
                <p>{{ $t ('confirmationMessage') }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.confirmation-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: beige;
  border: 2px solid green;
  padding: 6rem;
  text-align: center;
  z-index: 1000; 
}

.logo {
  width: 7rem;
  margin-bottom: 2rem;
}

.page-content{
  padding-top: 10rem;
  padding-bottom: 5rem;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.bg-page {
  margin-top: -1rem;
  padding: 1rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 13rem);
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
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;


  i {
    font-size: 2rem;
    padding-bottom: 1rem;
    color: $primary-color;
  }
}

.contact-us {
  margin-left: 1.5rem;
}
</style>