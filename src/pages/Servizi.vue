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
        { icon: 'fa-solid fa-temperature-high', text: 'Riscaldamento' },
        { icon: 'fa-solid fa-elevator', text: 'Ascensore' },
        { icon: 'fa-solid fa-wifi', text: 'Wi-Fi gratuito' },
        { icon: 'fa-solid fa-broom', text: 'Pulizia giornaliera' },
        { icon: 'fa-solid fa-baby-carriage', text: 'Culle su richiesta' },
        { icon: 'fa-solid fa-bag-shopping', text: 'Negozio souvenir' },
        { icon: 'fa-solid fa-people-roof', text: 'Camere familiari disponibili' },
        { icon: 'fa-solid fa-sun', text: 'Terrazza Solarium' },
        { icon: 'fa-solid fa-utensils', text: 'Bollitore e microonde disponibili' },
        { icon: 'fa-solid fa-restroom', text: 'Camere con bagno privato, biancheria e asciugacapelli.' },
        { icon: 'fa-solid fa-panorama', text: 'Balconi/Patio (nella maggior parte delle camere)' },
        { icon: 'fa-solid fa-square-parking', text: 'Parcheggio auto gratuito in loco (Scoperto)' },
        { icon: 'fa-solid fa-bicycle', text: ' Garage gratuito per Bike/Moto (coperto)' },
        { icon: 'fa-solid fa-paw', text: ' Animali ammessi (piccola/media taglia) senza supplemento' },
        { icon: 'fa-solid fa-warehouse', text: 'Deposito gratuito per biciclette (Bike room)' },
        { icon: 'fa-solid fa-chair', text: 'Dotazioni camere: armadio, Tv a schermo piatto, scrivania, porta bagagli, piccolo frigorifero' },
        { icon: 'fa-solid fa-ban-smoking', text: 'Struttura interamente non fumatori' },
        { icon: 'fa-solid fa-book-open-reader', text: 'Amache' },
        { icon: 'fa-solid fa-person-walking-luggage', text: 'Custodia bagagli gratuito' },
        { icon: 'fa-solid fa-tree', text: 'Giardino/Bosco e Area picnic' },
        { icon: 'fa-solid fa-credit-card', text: 'Accettazione carte: VISA, MASTERCARD, American Express, BANCOMAT, MAESTRO' },

      ],
    };
  },

};
</script>
<template>
  <div class="page-content">
    <div class="container-fluid bg-page" >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center flex-column ">
          <h1 class="text-center mt-4">{{ $t('servicesTitle') }}</h1>
          <p class="text-center service-description" v-html="$t('servicesDescription')"></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-2 mb-3 " v-for="(service, index) in services" :key="index">
          <div class="service-item  text-center h-100">
            <i :class="service.icon" id="service-icon"></i>
            <!-- <img :src="service.icon" alt="Service Icon" class="service-icon">  -->
            <p class="service-text">{{ $t(`services.${'service' + (index + 1)}`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.page-content{
  padding-top: 7rem;
  padding-bottom: 4rem;
}

.bg-page {
  margin-top: -1rem;
 padding-left: 4rem;
  padding-right: 4rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 10rem);
  width: 100%;
}
.service-description{
 // min-width: 17rem;
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