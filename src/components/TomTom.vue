<template>
  <div class="mt-5" ref="map" style="height: 400px;"></div>
</template>

<script>


import tt from '@tomtom-international/web-sdk-maps'

export default {
  data() {
    return {
      map: null,
      apiKey: '2QRkJUJyX9OT1og2NuGIOrXrLjjOKMQ9', // Sostituisci con la tua chiave API TomTom
      location: {
        lat: 45.4642,
        lon: 9.1900
      },
      zoom: 15
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      tt.setProductInfo('Vue TomTom Maps', '1.0');
      this.map = tt.map({
        key: this.apiKey,
        container: this.$refs.map,
        center: [this.location.lon, this.location.lat],
        zoom: this.zoom
      });

      const marker = new tt.Marker().setLngLat([this.location.lon, this.location.lat]).addTo(this.map);

      // Puoi personalizzare ulteriormente la mappa o aggiungere marker aggiuntivi secondo le tue esigenze.
    }
  }
};
</script>

<style scoped>
/* Aggiungi eventuali stili specifici del componente */
</style>