<template>
  <section>
    <div class="columns">
      <div class="map-container">
        <div style="width: 100%; height: 400px">
          <google-map :center="center" :zoom="12"></google-map>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { load, Map, Marker } from 'vue-google-maps';

  load('AIzaSyAulRolyPLtvxwTJykxW6aILdohgLOQ-50');

  export default {
    name: 'MapApp',
    components: {
      'googleMap': Map
    },
    data() {
      return {
        center: { lat: -16.4902128, lng: -39.0915235 }
      }
    }
  }
</script>

<style lang="scss">
  .map-container {
    width: 100%;
    height: 410px;
    background-color: orange;
  }
</style>