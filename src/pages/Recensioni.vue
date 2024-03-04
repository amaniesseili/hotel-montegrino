<script>
export default {
  data() {
    return {
      reviews: [
        {
          image: "/bg-homepage.jpg",
          title: "Claretta Borghi",
          date: "02.06.2023",
          content: "Hotel immerso nel verde! Molto tranquillo e accogliente...",
          googleLink: "link_a_google",
        },
        {
          image: "/bg-homepage.jpg",
          title: "Vittorio P.",
          date: "21.10.2023",
          content: "Sono stato 3 notti e non ho nulla da lamentarmi! Sono gentilissimi, mi sono sentito come a casa. Sicuro ci ritorno!",
          googleLink: "link_a_google",
        },
        {
          image: "/bg-homepage.jpg",
          title: "Elven Barchi",
          date: "05.05.2023",
          content: "Abbiamo soggiornato qui due notti a fine aprile, una favola! Hotel molto semplice ma davvero carino. Molto pulito, personale molto accogliente e disponibile. La camera era davvero pulita. Letto King size molto comodo!",
          googleLink: "link_a_google",
        },
        {
          image: "/bg-homepage.jpg",
          title: "De Nardo Salvatore",
          date: "12.06.2023",
          content: "Un albergo da consigliare. Molto carino, il personale gentilissimo è soprattutto a disposizione 24 su 24 ore. Camere di ottima pulizia, e colazione a bontà. Ci rivedremo senz'altro. S.Scarpato",
          googleLink: "link_a_google",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="page-content">
  <div class="container-fluid bg-page ">
    <div class="row text-center">
      <div class="col-2"></div>
      <div class="col-8 d-flex justify-content-center align-items-center flex-column">
        <h1 class="reviews-title">{{ $t ('reviewsTitle')}}</h1>
        <div class="d-flex justify-content-center align-items-center">
          <h3 class="me-2"> 4.7 </h3>
          <div class="google-rating ">
            <div class="rating-percentage"></div>
          </div>
          <small class="ms-2"> {{ $t ('rating.googleLink')}} 
            <img src="/google-logo-png2.png"  style="width: 17px;" alt="google-logo">
              Google</small>
        </div>
        <p class="mt-1 text-center reviews-description ">{{ $t ('reviewsDescription')}}</p>

      </div>
    </div>
    

  <!-- ------------------------ -->
  <div class="row d-flex justify-content-center">
      <div v-for="(review, index) in reviews" :key="index" class="col-12 col-md-5 col-lg-2 mb-4">
        <!-- la card di recensione -->
        <div class="card text-center d-flex justify-content-center align-items-center flex-column p-1 bg-transparent h-100">
          <img :src="review.image" class="card-img-top card-img-circle" alt="Reviewer">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ review.title }}</h5>
            <small class="review-date">{{ review.date }} 
              <img src="/google-logo-png2.png" style="width: 17px;" alt="google-logo"> Google
            </small>
            <p class="card-text mt-2 flex-grow-1">{{ $t('reviews.' + 'review' + (index + 1) + '.translatedContent') }}</p>
            <div class="rating">
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
  </div>
<!-- ---------------------------- -->

    <div class="row">
      <div class="col-4"></div>
      <div class="col-4 d-flex justify-content-center ">
        <a href="https://www.google.it/travel/hotels/hotel%20montegrino/entity/CgoIr9D4u_fEvdFREAE/reviews?q=hotel%20montegrino&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4754388%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72385362%2C72406588%2C72408738%2C72412680%2C72414906%2C72414907%2C72421565%2C72430562%2C72436632%2C72439728%2C72440517&hl=it-IT&gl=it&ssta=1&ts=CAEaSQorEicyJTB4NDc4NWQxM2JkNzQyYWM3MzoweDUxYTJmNjI3Nzc3ZTI4MmYaABIaEhQKBwjnDxAMGAISBwjnDxAMGAMYATICEAAqCQoFOgNFVVIaAA&rp=EK_Q-Lv3xL3RURCv0Pi798S90VE4AkAASAHAAQKaAgIIAA&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjAjrebluyCAxUAAAAAHQAAAAAQCQ"
          class="btn btn-primary read-more-btn text-center" target="_blank">{{ $t ('readMoreBtn')}}</a>
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
  padding: 2.5rem;
  background-color: $medium-background-color;
  min-height: calc(100vh - 10rem);
}


small{
  color: gray;

}

.google-rating {
  background-color: rgb(170, 166, 166);
  width: 20rem;
  height: 8px;
  border-radius: 5px;
}
h3{
  color:gray ;
}
.rating-percentage {
  background-color: $primary-color;
  width: 88%;
  height: 8px;
  border-radius: 5px;

}

@keyframes wipe {
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

.rating-percentage {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: wipe 3s ease-in-out forwards;
  animation-delay: 0.5s;
}


.reviews-title {
  margin-top: -1rem;
  min-width: 17rem;
}
.reviews-description{
  min-width: 23rem;
}

.card-img-circle {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.card {
  border-color: $primary-color;
  animation: fadeIn 0.5s ease-in-out;
  
  min-width: 9rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.card:hover {
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
  background-color:$primary-color ;
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
  margin-top: 1rem;
  min-width: 15rem;
}

.read-more-btn:hover {
  background-color: #4CAF50;
}

.rating {
  color: $primary-color;
  font-size: 0.7rem;
}</style>