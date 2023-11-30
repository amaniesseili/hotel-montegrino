<script>
export default {

}
</script>
<template>
  <div class="container-fluid bg-page ">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="reviews-title text-center">Cosa Dicono di Noi</h1>
    <p class="text-center">Scoprite cosa dicono i nostri ospiti di noi. Leggete recensioni autentiche e condividete le vostre esperienze. La vostra soddisfazione è la nostra priorità, e ogni parola condivisa contribuisce a plasmare l'ospitalità unica dell'Hotel Montegrino. Grazie per essere parte della nostra storia e per permetterci di rendere ogni soggiorno memorabile.</p>

      </div>
    </div>
    

    <div class="row ">
      <div class="col-2"></div>
      <!-- recensione numero 1  -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card text-center d-flex justify-content-center align-items-center flex-column p-2 bg-transparent h-100">
          <img src="public/bg-homepage.jpg" class="card-img-top card-img-circle" alt="Reviewer 1">
          <div class="card-body">
            <h5 class="card-title">Claretta Borghi</h5>
            <small class=" review-date ">02.06.2023 su
              <img src="public/logo-google.png" style="width: 17px;" alt="google-logo"> Google
            </small>
            <p class="card-text mt-3">Hotel immerso nel verde! Molto tranquillo e accogliente. Staff disponibile e camere
              pulite. Ideale per gite fuori porta per gli amanti della natura!</p>
          </div>
        </div>
      </div>

      <!-- recensione numero 2  -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card text-center d-flex justify-content-center align-items-center flex-column p-2 bg-transparent h-100">
          <img src="public/bg-homepage.jpg" class="card-img-top card-img-circle" alt="Reviewer 1">
          <div class="card-body">
            <h5 class="card-title">Vittorio P.</h5>
            <small class=" review-date ">21.10.2023 su
              <img src="public/logo-google.png" style="width: 17px;" alt="google-logo"> Google
            </small>
            <p class="card-text mt-3">Sono stato 3 notti e non ho nulla da lamentarmi! Sono gentillissimi, mi sono sentito come a casa. Sicuro ci ritorno!</p>
          </div>
        </div>
      </div>
      <!-- recensione numero 3  -->
      <div class="col-12 col-md-6 col-lg-2 ">
        <div class="card text-center d-flex justify-content-center align-items-center flex-column p-2 bg-transparent h-100">
          <img src="public/bg-homepage.jpg" class="card-img-top card-img-circle" alt="Reviewer 1">
          <div class="card-body">
            <h5 class="card-title">Elven Barchi</h5>
            <small class=" review-date ">05.05.2023 su
              <img src="public/logo-google.png" style="width: 17px;" alt="google-logo"> Google
            </small>
            <p class="card-text mt-3">Abbiamo soggiornato qui due notti a fine aprile, una favola! Hotel molto semplice ma davvero carino. Molto pulito, personale molto accogliente e disponibile. La camera era davvero pulita.Letto King size molto comodo!</p>
          </div>
        </div>
      </div>
      <!-- recensione numero 4  -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card text-center d-flex justify-content-center align-items-center flex-column p-2 bg-transparent h-100">
          <img src="public/bg-homepage.jpg" class="card-img-top card-img-circle" alt="Reviewer 1">
          <div class="card-body">
            <h5 class="card-title">De Nardo Salvatore</h5>
            <small class=" review-date ">12.06.2023 su
              <img src="public/logo-google.png" style="width: 17px;" alt="google-logo"> Google
            </small>
            <p class="card-text mt-3">Un albergo da consigliare. Molto carino, il personale gentillissimo è sopratutto a disposizione 24 su 24 ore. Cmere di ottima pulizia, e colazione a bontà. Ci rivedremo senz'altro. S.Scarpato </p>
          </div>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <a href="https://www.google.it/travel/hotels/hotel%20montegrino/entity/CgoIr9D4u_fEvdFREAE/reviews?q=hotel%20montegrino&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4754388%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72385362%2C72406588%2C72408738%2C72412680%2C72414906%2C72414907%2C72421565%2C72430562%2C72436632%2C72439728%2C72440517&hl=it-IT&gl=it&ssta=1&ts=CAEaSQorEicyJTB4NDc4NWQxM2JkNzQyYWM3MzoweDUxYTJmNjI3Nzc3ZTI4MmYaABIaEhQKBwjnDxAMGAISBwjnDxAMGAMYATICEAAqCQoFOgNFVVIaAA&rp=EK_Q-Lv3xL3RURCv0Pi798S90VE4AkAASAHAAQKaAgIIAA&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjAjrebluyCAxUAAAAAHQAAAAAQCQ" class="btn btn-primary read-more-btn text-center" target="_blank">Leggi più recensioni su
          Google</a>
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

.reviews-title {
  margin-top: -2rem;
}

.card-img-circle {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.card {
  border-color: $primary-color;
}
.card:hover{
  border: 2px solid $primary-color;
}

.card-title {
  color: $primary-color;
  font-size: bolder;
}

.review-date {
  margin-top: 5px;
}

.google-icon {
  font-size: 18px;
  margin-right: 5px;
}


.read-more-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;


}

.read-more-btn:hover {
  background-color: #45a049;
}</style>