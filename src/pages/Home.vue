<script>
export default {

}
</script>
<template>
  <div class="container-fluid bg-homepage d-flex justify-content-center align-items-center flex-column" >

    <div class="welcome-box">
      <div id="welcome">
        <h4 class="welcome-message">BENVENUTO AL</h4>
        <h1 class="montegrino-name">Montegrino Hotel</h1>
      </div>

      <div id="slogan">
        <p>Il tuo Rifugio Perfetto nella Natura</p>
      </div>

      <a href="/prenota" id="book-now-btn">Prenota Ora</a>
    </div>

</div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

/*stile homepage*/

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