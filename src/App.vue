<script>
export default {
  build: {
    rollupOptions: {
      external: ['/logo-montegrino.JPG']
    }
  },
  data() {
    return {
      currentLanguage: 'it', // Lingua corrente, inizializzata con italiano
      flagExtension: 'svg', // Estensione predefinita del flag
    };
  },
  computed: {
    currentLanguageFlag() {
      const languageCode = this.currentLanguage.toLowerCase(); // Converto il codice della lingua in minuscolo
      if (languageCode === 'it') {
        return '/Flag_of_it.png'
      } else {
        const flagPath = `/Flag_of_${languageCode}.${this.flagExtension}`;
        console.log('Flag Path:', flagPath);
        return flagPath;
      }
    },
  },

  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.currentLanguage = locale;
      // Aggiorno l'estensione del flag se necessario
      this.flagExtension = locale === 'it' ? 'svg' : 'png';
    },
    //aggiungere un metodo closeMenu per chiudere il menu toggler dopo aver cliccato su una voce di menu e net template aggiungo l'evento @click="closeMenu"
    closeMenu(){
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler.classList.contains('collapsed')) {
      return; // Il menu è già chiuso
    }
    navbarToggler.click(); // Simulare il clic sul toggler per chiudere il menu
  },
}
};
</script>

<template>
  <!--------- header --------->

  <nav class=" navbar montegrino-nav navbar-expand-lg fixed-top ">
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
        
<!-- prova mailjs -->
<!-- <li class="nav-item me-5 ">
  <router-link to="/mailjs" class="nav-link">mailjs</router-link>
</li> -->
<!-- -------------------------------- -->

        <li class="nav-item me-5 ">
          <router-link to="/" class="nav-link" @click="closeMenu" >{{ $t('home') }}</router-link>
        </li>
        <li class="nav-item me-5 ">
          <router-link to="/chisiamo" class="nav-link" @click="closeMenu" >{{ $t('chiSiamo') }}</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link to="/galleria" class="nav-link" @click="closeMenu" >{{ $t('galleria') }}</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link to="/recensioni" class="nav-link" @click="closeMenu" >{{ $t('recensioni') }}</router-link>
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
          <router-link to="/servizi" class="nav-link" @click="closeMenu" >{{ $t('servizi') }}</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link to="/contatti" class="nav-link" @click="closeMenu" >{{ $t('contatti') }}</router-link>
        </li>
        <li class="nav-item me-5">
          <a href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ita"
            target="_self" class="nav-link">{{ $t('prenota') }}

          </a>
        </li>
        <!-- <li class="nav-item me-5">
          <router-link to="/lingua" class="nav-link">{{ $t('lingua') }}</router-link>
        </li> -->


        <!-- -----lingua2 ----- -->
        <li class="nav-item dropdown ">
          <!-- -------------------------- -->

          <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t('lingua') }} <span>
              <img :src="currentLanguageFlag" class="flags" alt="f">
            </span>
          </a>
          <ul class="dropdown-menu p-1 ">
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item" href="#" @click="changeLocale('it')">
                <img src="/Flag_of_it.png" class="flags" alt="flag of italy"> {{ $t('italiano') }}
              </a>
            </li>


            <li class="montegrino-scroll-nav">
              <a class="dropdown-item" href="#" @click="changeLocale('en')">
                <img src="/Flag_of_en.png" class="flags" alt="flag of united kingdom"> {{ $t('inglese') }}
              </a>
            </li>
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item " href="#" @click="changeLocale('fr')">
                <img src="/Flag_of_fr.png" class="flags" alt="flag of france"> {{ $t('francese') }}
              </a>
            </li>
            <li class="montegrino-scroll-nav">
              <a class="dropdown-item" href="#" @click="changeLocale('de')">
                <img src="/Flag_of_de.png" class="flags" alt=" flag of germany "> {{ $t('tedesco') }}
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
          <img src="/logo-montegrino.JPG?url" alt="hotel montegrino logo">
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
  position:fixed;
  top: 0;
  width: 100%;
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
  width: 6.5rem;
  margin-top: -1rem;
}

.stars {
  color: $text-color-header-footer;
  font-size: 0.5rem;
  margin-left: 2.2rem;
  margin-top: -1.3rem;
  margin-bottom: -0.3rem;
}

.toggler-icon {
  padding: 1rem;
}

/* Stili specifici del Footer */
.footer {
  position: fixed;
  bottom: 0;
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
