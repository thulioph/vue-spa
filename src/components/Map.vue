<template>
  <div>
    <div class="columns">
      <div id="map" class="map-container"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MapApp',

    props: ['coords', 'address'],

    mounted() {
      const canvas = document.getElementById("map");

      const latLng = new google.maps.LatLng(this.coords[0], this.coords[1]);
      const myOptions = {
        scrollwheel: false,
        draggable: true,
        panControl: false,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
      };

      let map = new google.maps.Map(canvas, myOptions);

      let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Estamos aqui!',
        animation: google.maps.Animation.DROP
      });

      let infowindow = new google.maps.InfoWindow({
        content: this.address,
        maxWidth: 700
      });

      infowindow.open(map, marker);

      google.maps.event.addListener(marker, 'click', () => infowindow.open(map, marker));
    },

    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .map-container {
    width: 100%;
    height: 410px;
  }
</style>