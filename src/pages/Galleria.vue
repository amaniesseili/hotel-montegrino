<script>
//import { Bcarousel }from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
export default {

}
</script>
<template>
  <div class="page-content"></div>
  <div class="container-fluid bg-page">
    <div class="row d-flex justify-content-center">

      <div class="col-7">
        <h1 class="gallery-title text-center">{{ $t('gallery.title') }}</h1>
        <p class="gallery-description text-center mb-3 mt-3"> {{ $t('gallery.description') }}</p>

      </div>
      <div class="col-7">

        <div class="row gallery-row d-flex justify-content-center mb-5">

          <div id="carouselExampleIndicators" class="carousel slide ">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
                aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"
                aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10"
                aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11"
                aria-label="Slide 12"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12"
                aria-label="Slide 13"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13"
                aria-label="Slide 14"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14"
                aria-label="Slide 15"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15"
                aria-label="Slide 16"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="16"
                aria-label="Slide 17"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item  active ">
                <img src="/photo-slider-14.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item ">
                <img src="/photo-slider-2.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-1.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-4.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-5.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-6.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-7.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-8.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>

              <div class="carousel-item">
                <img src="/photo-slider-10.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-11a.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-12a.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-13.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-1.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-16.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              <div class="carousel-item">
                <img src="/photo-slider-15a.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
              
              <div class="carousel-item">
                <img src="/photo-slider-17a.jpg" class="d-block  slider-img mx-auto" alt="hotel montegrino">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>

    </div>




  </div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.page-content {
  padding-top: 10rem;
  //padding-bottom: 5rem;
}

.slider-img {
  height: 30rem;
  width: auto;
  //border: 2px solid black;
}

.carousel-control-next-icon {
  background-color: $primary-color;
  padding: 1.3rem;
  border-radius: 1.5rem;
}

.carousel-control-prev-icon {
  background-color: $primary-color;
  padding: 1.3rem;
  border-radius: 1.5rem;
}

.bg-page {
  margin-top: -1rem;
  padding: 3rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 13rem);
}



//---------------------------------</style>