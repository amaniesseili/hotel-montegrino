<script>

//import LanguageSwitcher from './components/LanguageSwitcher.vue';

export default {
  components: {
    //LanguageSwitcher, //Registro il componente LanguageSwitcher

  }


}
</script>

<template>
  <!--------- header --------->

  <nav class=" navbar montegrino-nav navbar-expand-lg ">
    <!-- se metto al posto della classe montergrino-nav (bg-body-tertiary) funziona tutto-->


    <!---------- logo -->
    <router-link to="/" class="navbar-brand d-lg-none d-md-block d-sm-block">
      <img class="logo me-1" src="/logo-montegrino.JPG?url" alt="">
      <div class="stars">
        <i class="fa-solid fa-star me-1"></i>
        <i class="fa-solid fa-star me-1"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </router-link>
    <!-- ------button-toggler ------- -->
    <button class="navbar-toggler me-4 mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <!-- --------------------- -->
    <div class="collapse navbar-collapse justify-content-center montegrino-scroll-nav" id="navbarNavDropdown">
      <ul class="navbar-nav ms-4">
        <li class="nav-item me-5 ">
          <router-link to="/" class="nav-link">{{ $t('home') }}</router-link>
        </li>
        <li class="nav-item me-5 ">
          <router-link to="/chisiamo" class="nav-link">Chi Siamo</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link to="/galleria" class="nav-link">Galleria</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link to="/recensioni" class="nav-link">Recensioni</router-link>
        </li>
      </ul>

      <!------------logo------------ -->
      <router-link to="/" class="navbar-brand d-lg-block d-none d-sm-none ">
        <img class="logo me-1" src="/logo-montegrino.JPG?url" alt="">
        <div class="stars">
          <i class="fa-solid fa-star me-1"></i>
          <i class="fa-solid fa-star me-1"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </router-link>
      <!-------------------------------- -->

      <ul class="navbar-nav ms-4 ">
        <li class="nav-item me-5">
          <router-link to="/servizi" class="nav-link" >Servizi</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link to="/contatti" class="nav-link" >Contatti</router-link>
        </li>
        <li class="nav-item me-5">
          <a href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ita"
            target="_self" class="nav-link">Prenota</a>
        </li>
        <li class="nav-item me-5">
          <router-link to="/lingua" class="nav-link" >Lingua</router-link>
        </li>
        <!-- -----lingua2 ----- -->
        <li class="nav-item dropdown ">
          <!-- LanguageSwitche componente -->

            <!-- <LanguageSwitcher
              :currentLanguage="'italiano'" 
              :languages="[
                { code: 'it', name: 'Italiano', flag: '/Flag_of_Italy.svg.png' },
                { code: 'en', name: 'Inglese', flag: '/Flag_of_the_United_Kingdom.png' },
                { code: 'fr', name: 'Francese', flag: '/Flag_of_France.png' },
                { code: 'de', name: 'Tedesco', flag: '/Flag_of_Germany.svg.png' },
              ]"
            /> -->
          
          <!-- -------------------------- -->
        
          <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            lingua <span>
              <img src="/Flag_of_Italy.svg.png" class="flags" alt="">
            </span>
          </a>
          <ul class="dropdown-menu p-1 ">
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item" href="#">
                <img src="/Flag_of_Italy.svg.png" class="flags" alt=""> Italiano
              </a>
            </li>
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item" href="#">
                <img src="/Flag_of_the_United_Kingdom.png" class="flags" alt=""> Inglese
              </a>
            </li>
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item " href="#">
                <img src="/Flag_of_France.png" class="flags" alt=""> Francese
              </a>
            </li>
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item" href="#">
                <img src="/Flag_of_Germany.svg.png" class="flags" alt=""> Tedesco
              </a>
            </li>
          </ul>
        </li>

      </ul>
      
      
      <!-- -------------------------- -->
    </div>

  </nav>


  <!--------- main --------->
  <main>


    <router-view></router-view>


  </main>
  <!--------- footer --------->
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-section d-none d-sm-none d-md-block d-lg-block">
        <router-link to="/">
          <img src="/logo-montegrino.JPG?url" alt="">
        </router-link>
      </div>
      <div class="copyright-section">
        <p class="text-center">&copy; 2023 Hotel Montegrino. All rights reserved.</p>
        <div class="text-center">
          <small> Powered by Amani Esseili</small>
        </div>
      </div>
      <div class="social-media-icons">
        <a href="https://www.instagram.com/hotelmontegrino/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="url-to-facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use "./style/partials/variables" as *;

/* Stili specifici della Navbar */

.montegrino-nav {
  background-color: $primary-color;
  //color: $text-color-header-footer;
  text-decoration: none;
  list-style: none;

}

.montegrino-nav li {
  margin-right: 0rem;
}

/*.navbar-nav .nav-item:hover {
  padding-bottom: 1rem;
  border-bottom: 3px solid white;
  color: white;
  
}*/
.flags {
  width: 1.5rem;
  border: 0.5px solid rgb(220, 217, 217);
}

.montegrino-nav a {
  text-decoration: none;
  color: white;
}


.montegrino-scroll-nav {
  background-color: $primary-color;
}

.logo {
  width: 120px;
}

.stars {
  color: $text-color-header-footer;
  font-size: 0.7rem;
  margin-left: 2.2rem;
  margin-top: -1.3rem;
  margin-bottom: 1rem;
}

.toggler-icon {
  padding: 1rem;
}

/* Stili specifici del Footer */
.footer {
  // position: fixed;
  // bottom: 0;
  width: 100%;
  min-height: 5rem;
  background-color: $primary-color;
  color: $text-color-header-footer;
  padding-left: 5rem;
  padding-right: 5rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section img {
  height: 4rem;
}

.social-media-icons i {
  font-size: 1.5rem;
  color: $text-color-header-footer;
  margin-left: 2rem;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.social-media-icons i:hover {
  border-color: $medium-background-color ;
  background-color: $light-background-color ;
  color: $primary-color;
  transform: scale(1.3);

}

.copyright-section p {
  margin: 0;
}
</style>
