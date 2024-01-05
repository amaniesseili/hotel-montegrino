<script>
export default {


}
</script>

<template>

  <!--------- header --------->
  <nav>

    <ul class="montegrino-nav d-flex justify-content-center align-items-center">
      <li class="">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/chisiamo" class="nav-link">Chi Siamo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/galleria" class="nav-link">Galleria</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/recensioni" class="nav-link">Recensioni</router-link>
      </li>
      <div class="d-flex justify-content-center">
        <router-link to="/">
          <img class="logo me-5" src="/logo-montegrino.JPG?url" alt="">
          <div class="stars">
            <i class="fa-solid fa-star me-1"></i>
            <i class="fa-solid fa-star me-1"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </router-link>
      </div>

      <li class="nav-item">
        <router-link to="/servizi" class="nav-link">Servizi</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contatti" class="nav-link">Contatti</router-link>
      </li>
      <li class="nav-item">
        <!-- <router-link to="/prenota" class="nav-link">Prenota</router-link> -->
        <a href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ita" target="_self">Prenota</a>
      </li>
      <li class="nav-item">
        <router-link to="/lingua" class="nav-link">Lingua</router-link>
      </li>

    </ul>

  </nav>
  <!-- ------------- -->
<nav class="navbar navbar-expand-lg montegrino-nav">


  <button class="navbar-toggler ms-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav d-flex justify-content-center align-items-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/chisiamo" class="nav-link">Chi Siamo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/galleria" class="nav-link">Galleria</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/recensioni" class="nav-link">Recensioni</router-link>
      </li>
    </ul>
  </div>
  <router-link to="/" class="navbar-brand">
    <img class="logo me-1" src="/logo-montegrino.JPG?url" alt="">
    <div class="stars">
      <i class="fa-solid fa-star me-1"></i>
      <i class="fa-solid fa-star me-1"></i>
      <i class="fa-solid fa-star"></i>
    </div>
  </router-link>
  <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
    <ul class="navbar-nav d-flex justify-content-center align-items-center">
      <li class="nav-item">
        <router-link to="/servizi" class="nav-link">Servizi</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contatti" class="nav-link">Contatti</router-link>
      </li>
      <li class="nav-item">
        <a href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ita" target="_self" class="nav-link">Prenota</a>
      </li>
      <li class="nav-item">
        <router-link to="/lingua" class="nav-link">Lingua</router-link>
      </li>

    </ul>

  </div>


</nav>
  <!--------- main --------->
  <main>


      <router-view></router-view>


  </main>
  <!--------- footer --------->
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-section">
        <router-link to="/">
          <img src="/logo-montegrino.JPG?url" alt="">
        </router-link>
      </div>
      <div class="copyright-section">
        <p>&copy; 2023 Hotel Montegrino. All rights reserved.</p>
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
  background-color:$primary-color;
  color: $text-color-header-footer;
  text-decoration: none;
  list-style: none;
  width: 100%;
  height: 9rem;
  
}

.montegrino-nav li {
  margin-right: 3rem;
}

.montegrino-nav li:hover {
  padding-bottom: 1rem;
  border-bottom: 3px solid white;
  color: white;
}

.montegrino-nav a {
  text-decoration: none;
  color: white;
}

.logo {
  width: 120px;
}
.stars{
  color: $text-color-header-footer;
  font-size: 0.7rem;
  margin-left: 2.2rem;
  margin-top: -1.3rem;
  margin-bottom: 1rem;
}
.toggler-icon{
  padding: 1.5rem;
}

/* Stili specifici del Footer */
.footer {
 // position: fixed;
 // bottom: 0;
  width: 100%;
  height: 4rem;
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
.social-media-icons i:hover{
  border-color: $medium-background-color ;
  background-color:$light-background-color ;
  color: $primary-color;
  transform: scale(1.3);
  
}

.copyright-section p {
  margin: 0;
}
</style>
