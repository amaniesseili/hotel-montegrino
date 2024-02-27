<script>
export default {
  computed: {
    bookNowLink() {
      // devo inserire  il link appropriato per la prenotazione 
      // in base alla lingua corrente ( si trova nello mail di vertical booking)
      switch (this.$i18n.locale) {
        case 'it':
          return 'https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ita';
        case 'de':
          return 'https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ger';
        case 'fr':
          return 'https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=fra';
        default:
          return '#';
      }
    }
  }
}
</script>
<template>
  <div class="page-content">
  <div class="container-fluid bg-homepage d-flex justify-content-center align-items-center flex-column" >

    <div class="welcome-box">
      <div id="welcome">
  
        <h4 class="welcome-message">{{ $t('welcomeMessage') }}</h4>
        <h1 class="montegrino-name">{{ $t('hotelName')}}</h1>
      </div>

      <div id="slogan">
        <p>{{ $t('slogan')}}</p>
      </div>

      <a href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=26654&dc=4294&id_stile=20200&lingua_int=ita" id="book-now-btn">{{ $t('bookNow')}}</a>
    
    </div>

</div>
</div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

/*stile homepage*/

.page-content{
  padding-top: 10rem;
}

.bg-homepage{
	background: url('/bg-homepage.jpg');
  background-position: center;
	background-size: cover;
	background-attachment: fixed; //fissa il bg-img per evitare lo scrolling
	background-repeat: no-repeat;
  overflow-x: hidden;
  height: calc(100vh - 13rem);
  width: 100%;
  margin-top: -1rem;
}



.welcome-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  //background-color: $primary-color-transparent;
  border-radius: 1rem;
  padding: 3rem;
  color: $text-color-header-footer;
}

.montegrino-name{
  font-size: 4.5rem;
  font-weight: bolder;
  margin-bottom: 5rem;
  animation: fadeAnimation 1s ease-in-out;
}
@keyframes fadeAnimation {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.welcome-message{
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: bold;
  animation: fadeAnimation 1s ease-in-out;

}


#slogan {
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: bold;
  animation: fadeAnimation 2s ease-in-out;
}

#book-now-btn {
  background-color:$primary-color;
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

#book-now-btn:hover {
  background-color: #4CAF50;
}
</style>