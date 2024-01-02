<script>
//import { Bcarousel }from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
export default {

}
</script>
<template>
  <div class="container-fluid bg-page">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="gallery-title text-center">Esplora il nostro mondo</h1>
        <p class="gallery-description text-center mb-3 mt-3">Esplora la nostra galleria di immagini e immergiti nella bellezza dell'Hotel Montegrino. Dalle accoglienti camere all'atmosfera del nostro bar, ogni foto cattura l'essenza del nostro rifugio nella natura. Scopri dettagli unici e lasciati ispirare da una visualizzazione incantevole della nostra struttura.</p>

      </div>
    </div>


    <div class="row gallery-row">
      <div class="col 2"></div>
      <div id="carouselExampleIndicators" class="carousel slide col-8" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/bg-homepage.jpg" class="d-block w-100" alt="..." style="height: 30rem;" >
          </div>
          <div class="carousel-item">
            <img src="/logo-montegrino.JPG?url" class="d-block w-100" alt="..." style="height: 30rem;" >
          </div>
          <div class="carousel-item">
            <img src="/bg-homepage.jpg" class="d-block w-100" alt="..." style="height: 30rem;" >
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
<div class="col-2"></div>

     
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



//---------------------------------
</style>