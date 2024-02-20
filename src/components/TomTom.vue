
<script>
import tt from '@tomtom-international/web-sdk-maps';
//import { onMounted, ref } from 'vue' 

export default {

  data() {
    return {
      map: null,
      apiKey: '2QRkJUJyX9OT1og2NuGIOrXrLjjOKMQ9', // la mia chiave API TomTom
      location: {
        lat: 45.978461,
        lon: 8.771951
      },
      zoom: 15
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      tt.setProductInfo('Vue TomTom Maps', '1.0.0');
  
      let map = tt.map({
        key: this.apiKey,
        container: this.$refs.map,
        center: this.location,
        zoom: 15
      });
      let marker = new tt.Marker().setLngLat(this.location).addTo(map);

      // const montegrinoMarker = new tt.Marker({
      //   color: 'green'
      // })
      //   .setLngLat([this.location.lon, this.location.lat])
      //   .addTo(this.map);
    }
  }
};
</script>

<template>
  <div class="map" ref="map" id="map"></div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.map {
  border: 2px solid $primary-color;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  height: 40rem;
}
</style>