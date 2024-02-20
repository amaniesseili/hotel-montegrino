<script>
export default {

}
</script>
<template>
  <div class="page-content">
    <div class="container-fluid bg-page d-flex justify-content-center align-items-center flex-column">
      <h1>{{ $t('contactUsPageTitle') }}</h1>
      <p class="contactUs-Description">  {{ $t ('contactUsPageDescription') }} </p>
      <div class=" row d-flex">

        <div class="card col-lg-4 col-md-6">
          <img src="/bg-homepage.jpg" class="card-img" alt="Reception">
          <div class="card-img-overlay card-img-overlay-info">
            <h5 class="card-title">{{$t ('receptionOverlay.title')}}</h5>
            <p class="card-text">{{$t ('receptionOverlay.description')}}</p>
          </div>
        </div>


        <div class="card col-lg-4 col-md-6 ">
          <img src="/bg-homepage.jpg" class="card-img" alt="Camere">
          <div class="card-img-overlay card-img-overlay-info">
            <h5 class="card-title"> {{ $t ('roomsOverlay.title')}}</h5>
            <p class="card-text">{{ $t ('roomsOverlay.description')}}</p>
          </div>
        </div>

        <div class="card col-lg-4 col-md-6">
          <img src="/bg-homepage.jpg" class="card-img" alt="Bar">
          <div class="card-img-overlay card-img-overlay-info">
            <h5 class="card-title">{{ $t ('barOverlay.title')}}</h5>
            <p class="card-text">{{ $t ('barOverlay.description')}}.</p>
          </div>
        </div>
      </div>

      <!-- <button class="btn explore-btn mt-4" onclick="window.location.href='/esplora'">Esplora</button> -->
    </div>

  </div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.page-content{
  padding-top: 10rem;
}
.bg-page {
  margin-top: -1rem;
  padding: 5rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 13rem);
}
 .contactUs-Description{
  max-width: 60rem;
  min-width: 10rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
 }

.card {
  position: relative;
  background-color: $medium-background-color;
  border: none;
  margin-bottom: 1rem;
}

.card-img{
  max-width: 100%;
  height: 100%;
}
.card-img-overlay-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  max-width: 100%;
  max-height: 100%;
  overflow: auto;


}

.card:hover .card-img-overlay-info {
  opacity: 1;
  background-color: $primary-color-transparent;
  height: fit-content;

}

/*.explore-btn {
  background-color: $primary-color;
  color: white;
  padding: 10px 30px;
  font-size: 1.2em;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.explore-btn:hover {
  background-color: #4CAF50;
  color: white;
}*/
</style>