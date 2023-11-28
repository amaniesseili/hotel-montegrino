<script>


	export default {


	}
</script>

<template>
  <nav class="navbar  navbar-expand-lg">

      <ul class="montegrino-nav d-flex justify-content-center align-items-center">
        <li class="">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/chi siamo" class="nav-link">Chi Siamo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/galleria" class="nav-link">Galleria</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/recensioni" class="nav-link">Recensioni</router-link>
        </li>

        <router-link to="/">
          <img class="logo me-5" src="/logo-montegrino.JPG" alt="">
        </router-link>

        <li class="nav-item">
          <router-link to="/servizi" class="nav-link">Servizi</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contatti" class="nav-link">Contatti</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/prenota" class="nav-link">Prenota</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lingua" class="nav-link">Lingua</router-link>
        </li>

      </ul>

  </nav>

  <main>

      <router-view></router-view>


  </main>

  <h1>amani</h1>


</template>

<style lang="scss">

/* Stili specifici della Navbar, se necessario */
.montegrino-nav {
  background-color: #51962C;
  color: white;
  text-decoration: none;
  list-style: none;
  width: 100%;
}
.montegrino-nav li{
  margin-right: 3rem;
}

.montegrino-nav li:hover{
  padding-bottom: 1rem;
  border-bottom: 3px solid white;
}

.logo{
  width:120px;

}


</style>
