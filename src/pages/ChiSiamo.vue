<script>
	export default {

	}
</script>
<template>
  <div>
    <div class="container-fluid bg-page d-flex justify-content-center align-items-center flex-column">
      <h1>Hotel Montegrino</h1>
      <p class="text-center mb-5 mt-3">L'Hotel Montegrino è un rifugio incantevole immerso nella natura, dove il comfort si fonde armoniosamente con l'ambiente circostante. Con una vista mozzafiato e un'atmosfera accogliente, l'hotel offre un'esperienza unica di relax e tranquillità. La sua reception accogliente è pronta ad assisterti con un servizio premuroso, mentre le camere sono progettate per offrire comfort e calore. Esplora i dettagli delle nostre camere, immergiti nella serenità del nostro bar, e lasciati coccolare dalla magia di Montegrino. Benvenuto in un luogo dove l'ospitalità diventa un'arte e ogni momento è un ricordo da custodire.</p>
     <div class=" row d-flex">

      <div class="card col-4 ">
        <img src="/bg-homepage.jpg" class="card-img" alt="Reception">
        <div class="card-img-overlay card-img-overlay-info">
          <h5 class="card-title">Reception</h5>
          <p class="card-text">Cuore accogliente dell'Hotel Montegrino, la nostra reception è pronta a offrirti un servizio personalizzato e consigli utili per rendere il tuo soggiorno indimenticabile.</p>
        </div>
      </div>

    
      <div class="card col-4 ">
        <img src="/bg-homepage.jpg" class="card-img" alt="Camere">
        <div class="card-img-overlay card-img-overlay-info">
          <h5 class="card-title">Camere</h5>
          <p class="card-text">Le nostre camere sono eleganti rifugi di comfort, pensate per offrire un'esperienza di soggiorno unica e rilassante, con arredi accoglienti e attenzione ai dettagli.</p>
        </div>
      </div>
    
      <div class="card col-4 ">
        <img src="/bg-homepage.jpg" class="card-img" alt="Bar">
        <div class="card-img-overlay card-img-overlay-info">
          <h5 class="card-title">Bar</h5>
          <p class="card-text">Il nostro bar è un'oasi di relax e socialità, dove potrai gustare bevande di qualità e deliziarti con piacevoli momenti conviviali, immerso in un'atmosfera accogliente e raffinata.</p>
        </div>
      </div>
    </div>
    
      <button class="btn explore-btn mt-4" onclick="window.location.href='/esplora'">Esplora</button>
    </div>
    
  </div>

</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.bg-page {
  margin-top: -1rem;
  padding: 5rem;
  background-color:$medium-background-color;
  height: calc(100vh - 13rem);
}

.card{
  position: relative;
  background-color: $medium-background-color;
  border: none;
  margin-bottom: 4rem;
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
  
  
}

.card:hover .card-img-overlay-info {
  opacity: 1;
  background-color: $primary-color-transparent;
  height: fit-content;

}
.explore-btn {
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
}


</style>