<script>
export default {

}
</script>
<template>
  <div class="page-content">
    <div class="container-fluid bg-page d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="text-center">
            <h1 class="titlefont">{{ $t('contactUsPageTitle') }}</h1>
            <p class="sloganfont">{{ $t ('slogaChiSiamo')}}</p>
            <p class="contactUs-Description">{{ $t('contactUsPageDescription') }}</p>
            
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 ">
          <!-- Aggiungo una classe wrapper per il colonna con overflow -->
          <div class="photo-column-wrapper">
            <div class="photo-column">
              

                <div class="card">
                  <img src="/chi siamo-reception1.jpg" class="card-img" alt="Reception">
                  <div class="card-img-overlay card-img-overlay-info">
                    <h5 class="card-title">{{ $t('receptionOverlay.title') }}</h5>
                    <p class="card-text">{{ $t('receptionOverlay.description') }}</p>
                  </div>
                </div>

                <div class="card ">
                  <img src="/chisiamo-bedroom1.jpg" class="card-img" alt="Camere">
                  <div class="card-img-overlay card-img-overlay-info">
                    <h5 class="card-title"> {{ $t('roomsOverlay.title') }}</h5>
                    <p class="card-text">{{ $t('roomsOverlay.description') }}</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="/chisiamo-bar.jpg" class="card-img" alt="Bar">
                  <div class="card-img-overlay card-img-overlay-info">
                    <h5 class="card-title">{{ $t('barOverlay.title') }}</h5>
                    <p class="card-text">{{ $t('barOverlay.description') }}.</p>
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
.page-content {
  padding-top: 7rem;
  overflow-y: hiden;
}

.titlefont{
  font-size: 4rem;
}
.sloganfont{
  font-size: 2rem;
}

.bg-page {
  margin-top: -1rem;
  padding: 5rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 10rem);
}

.contactUs-Description {
  max-height: 30rem;
  margin-top: 1rem;
  padding-top: 2rem;
  padding: 4rem;
  border: 2px solid green;
  //margin-right: 2rem ;
  overflow-x: auto;



}

.card {
  position: relative;
  background-color: $medium-background-color;
  border: none;
  margin-bottom: 1rem;
}

.card-img {
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

.photo-column-wrapper {
  height: 60vh; /* Aggiungo altezza al wrapper */
  overflow-y: auto; /* Abilito lo scroll verticale */
}

.photo-column {
  display: flex;
  flex-direction: column;
  height: max-content; /* Imposto altezza massima */
}

@media (max-width: 991.98px) {
  .photo-column-wrapper {
    height: auto; /* Rimuovo altezza fissa per il layout mobile */
    overflow-y: unset; /* Disabilito lo scroll verticale */
  }
}
</style>