<script>
//import { Bcarousel }from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
export default {
  data() {
    return {
      images: [
        { src: "/photo-slider-8.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-17a.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-34.jpg", alt: "hotel montegrino"},
        { src: "/photo-slider-1.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-2.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-3.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-4.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-5.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-7.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-8.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-10.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-11a.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-12a.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-13.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-14.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-15a.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-16.jpg", alt: "hotel montegrino" },
        { src: "/photo-slider-18a.jpg", alt: "hotel montegrino" },
        

        
      ],
      showCarousel: false,
      activeIndex: 0
    };
  },
  methods: {
    openCarousel(index) {
      this.activeIndex = index;
      this.showCarousel = true;
    },
    closeCarousel() {
      this.showCarousel = false;
    }
  }
};
</script>
<template>
  <div class="page-content">
    <div class="container-fluid bg-page">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h1 class="gallery-title text-center">{{ $t('gallery.title') }}</h1>
          <p class="gallery-description text-center mb-2 mt-3">{{ $t('gallery.description') }}</p>
        </div>
      </div>
  
      <div class="row gallery-row d-flex justify-content-center mb-5">
        <div v-for="(image, index) in images" :key="index" class="col-lg-3 col-md-6 mb-4 ">
          <div class="card rounded-0">
            <img :src="image.src" class="card-img-top gallery-img rounded-0" :alt="image.alt" @click="openCarousel(index)">
          </div>
        </div>
      </div>
  
      <!-- Carousel per visualizzare le immagini -->
      <div v-if="showCarousel" class="modal" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content my-modal-content">
            <div class="modal-body position-relative my-carousel">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-item': true, 'active': index === activeIndex }">
                    <img :src="image.src" class="d-block w-100" :alt="image.alt">
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
                <button type="button" class="btn-close position-absolute top-0 end-0 close-carousel" aria-label="Close" @click="closeCarousel"></button>
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
  
  //padding-bottom: 5rem;
}

.close-carousel{
  margin: -1rem;
  //padding: 0.5rem;
  font-size: smaller;

}
.gallery-img{
  height: 20rem;
  //width: 20rem;
  object-fit: cover;

}
.my-carousel{
  background-color: beige;
  border: 0.3rem solid green;
  padding: 1.5rem;
 // margin-top: 4rem;
}
.my-modal-content{
  margin-top: 7rem;
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
  min-height: calc(100vh - 10rem);
}



//---------------------------------</style>