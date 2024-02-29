<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      emailjs.send('service_87ulvgc', 'template_6t3apvo', this.formData)
        .then(response => {
          console.log('Email inviata con successo:', response);
          // Aggiungo qui la logica per mostrare un messaggio di conferma all'utente
        })
        .catch(error => {
          console.error('Errore nell\'invio dell\'email:', error);
          // Aggiungo qui la logica per gestire eventuali errori durante l'invio dell'email
        });
    }
  }
}
</script>
<template>
  <div>
    <h1 class="margin">Invio Email</h1>
    <div>
      <form @submit.prevent="submitForm">
        <label for="name">Nome:</label>
        <input type="text" v-model="formData.name" id="name" required>
       
        <label for="surname">Cognome:</label>
        <input type="text" v-model="formData.surname" id="surname" required>
       
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" id="email" required>
       
        <label for="message">Messaggio:</label>
        <textarea v-model="formData.message" id="message" required></textarea>
       
        <button type="submit">Invia Messaggio</button>
      </form>
    </div>
  </div>
</template>
<style>
.margin{
  margin-top: 10rem;
}

</style>