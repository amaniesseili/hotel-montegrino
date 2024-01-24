
<script>
import tt from '@tomtom-international/web-sdk-maps'

export default {
  data() {
    return {
      map: null,
      apiKey: '2QRkJUJyX9OT1og2NuGIOrXrLjjOKMQ9', // la mia chiave API TomTom
      location: {
        lat: 45.978461,
        lon: 8.771951
      },
      montegrinoLon: 8.771951,
      montegrinoLat: 45.978461,
      
      zoom: 15
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      tt.setProductInfo('Vue TomTom Maps', '1.0');
      /*--------------*/
      /*---------*/
      this.map = tt.map({
        key: this.apiKey,
        container: this.$refs.map,
        center: [this.location.lon, this.location.lat],
        zoom: 12
      });

      const montegrinoMarker = new tt.Marker({
        color: 'green'
      })
        .setLngLat([this.montegrinoLon,this.montegrinoLat])
        .addTo(this.map);


    }
  }
};
</script>

<template>
  <div class="map" ref="map"></div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.map{
  border: 2px solid $primary-color;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  height: 40rem;
}

</style>