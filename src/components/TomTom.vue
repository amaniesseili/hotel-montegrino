<script>
import tt from '@tomtom-international/web-sdk-maps';

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      tt.setProductInfo('MontergrinoHotel', '0.0.0'); // il nome della mio progetto (app) e la versione

      this.map = tt.map({
        key: '2QRkJUJyX9OT1og2NuGIOrXrLjjOKMQ9', // Sostituisco la mia chiave API TomTom
        container: this.$refs.mapContainer,
        style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=2QRkJUJyX9OT1og2NuGIOrXrLjjOKMQ9',
        center: [9.1895, 45.4642], // Coordinate di Milano
        zoom: 15,
      });

      // per aggiungere marcatori, linee
      const marker = new tt.Marker().setLngLat([9.1895, 45.4642]).addTo(this.map);
    },
  },
};
</script>

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>


<style scoped>
.map-container {
  height: 400px;
}
</style>