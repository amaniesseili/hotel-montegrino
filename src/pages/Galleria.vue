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
      
      <div class="col-8">
        <h1 class="gallery-title text-center">{{ $t ('gallery.title')}}</h1>
        <p class="gallery-description text-center mb-3 mt-3"> {{ $t ('gallery.description')}}</p>

      </div>
    </div>


    <div class="row gallery-row d-flex justify-content-center mb-5">

      <div id="carouselExampleIndicators" class="carousel slide col-4" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item d-flex justify-content-center active">
            <img src="/photo-slider-1.jpg" class="d-block  slider-img" alt="..." >
          </div>
          <div class="carousel-item">
            <img src="/photo-slider-2.jpg" class="d-block w-100 slider-img" alt="..." >
          </div>
          <div class="carousel-item">
            <img src="/photo-slider-3.jpg" class="d-block w-100 slider-img" alt="..." >
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


     
    </div> 
   

  </div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.page-content{
  padding-top: 10rem;
}

.slider-img{
  height: 30rem;
  //width: 100px;
  //border: 2px solid black;
}

/*.carousel-control-next{
  background-color: red;
}
.carousel-control-prev{
  background-color: red;
}*/
/*.carousel-item{
  display: flex;
  justify-content: center;
  align-items: center;
}*/
.bg-page {
  margin-top: -1rem;
  padding: 4rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 13rem);
}



//---------------------------------
</style>