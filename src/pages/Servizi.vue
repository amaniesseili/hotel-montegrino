<script>
export default {
  data() {
    return {
      services: [
        //{ icon: 'reception-icon.png', text: 'Reception aperta dalle 9:00 alle 22:00' },
        //{ icon: 'checkin-icon.png', text: 'Check-in dalle 14:00 alle 22:00 e Check-out entro le 11.00' },
        { icon: 'fas fa-mug-saucer', text: ' Colazione a buffet: 07:00-10:00' },
        { icon: 'fa-solid fa-globe', text: 'Staff multilingue: ITA, ENG, FR' },
        { icon: 'fa-solid fa-print', text: 'Servizi di segreteria: fotocopie, fax' },
        { icon: 'fa-solid fa-heading', text: 'Riscaldamento' },
        { icon: 'fa-solid fa-elevator', text: 'Ascensore' },
        { icon: 'fa-solid fa-wifi', text: 'Wi-Fi gratuito' },
        { icon: 'fa-solid fa-broom', text: 'Pulizia giornaliera' },
        { icon: 'fa-solid fa-baby-carriage', text: 'Culle su richiesta' },
        { icon: 'fa-solid fa-bag-shopping', text: 'Negozio souvenir' },
        { icon: 'fa-solid fa-people-roof', text: 'Camere familiari disponibili' },
        { icon: 'fa-solid fa-mountain-sun', text: 'Terrazza Solarium' },
        { icon: 'kettle-microwave-icon.png', text: 'Bollitore e microonde disponibili' },
        { icon: 'fa-solid fa-restroom', text: 'Camere con bagno privato, biancheria e asciugacapelli.' },
        { icon: 'balcony-icon.png', text: 'Balconi/Patio (nella maggior parte delle camere)' },
        { icon: 'fa-solid fa-square-parking', text: 'Parcheggio auto gratuito in loco (Scoperto)' },
        { icon: 'fa-solid fa-bicycle', text: ' Garage gratuito per Bike/Moto (coperto)' },
        { icon: 'fa-solid fa-paw', text: ' Animali ammessi (piccola/media taglia) senza supplemento' },
        { icon: 'fa-solid fa-warehouse', text: 'Deposito gratuito per biciclette (Bike room)' },
        { icon: 'fa-solid fa-chair', text: 'Dotazioni camere: armadio, Tv a schermo piatto, scrivania, porta bagagli, piccolo frigorifero' },
        { icon: 'fa-solid fa-ban-smoking', text: 'Struttura interamente non fumatori' },
        { icon: 'hammock-icon.png', text: 'Amache' },
        { icon: 'fa-solid fa-person-walking-luggage', text: 'Custodia bagagli gratuito' },
        { icon: 'garden-picnic-icon.png', text: 'Giardino/Bosco e Area picnic' },
        { icon: 'fa-solid fa-credit-card', text: 'Accettazione carte: VISA, MASTERCARD, American Express, BANCOMAT, MAESTRO' },

      ],
    };
  },

};
</script>
<template>
  <div>
    <div class="container-fluid bg-page" >
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <h1 class="text-center">Servizzi</h1>
        <p class="text-center">La nostra <strong>reception</strong>  accogliente è pronta ad assisterti tra le <strong> 9:00 e le 22:00</strong>, garantendo un servizio dedicato e disponibile. Il <strong>check-in</strong> , disponibile dalle <br> <strong>14:00 alle 22:00</strong>, e il <strong>check-out entro le 11:00</strong> . Siamo qui per rendere il tuo arrivo e la tua partenza il più agevoli possibile.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 mb-3 " v-for="(service, index) in services" :key="index">
          <div class="service-item  text-center h-100">
            <i :class="service.icon" id="service-icon"></i>
            <!-- <img :src="service.icon" alt="Service Icon" class="service-icon">  -->
            <p class="service-text">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.bg-page {
  margin-top: -1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  background-color: $medium-background-color;
  height: calc(100vh - 13rem);
}

.service-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  //margin-bottom: 20px;
  border: 1px solid $primary-color;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: all 0.5s ease;
  
}
.service-item:hover #service-icon{
  transform: scale(1.2);
  color: $primary-color;
}

#service-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: $primary-color-transparent;
}
</style>