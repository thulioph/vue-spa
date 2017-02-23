<template>
  <section>
    <div class="columns">
      <div id="map" class="map-container"></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MapApp',
    mounted() {
      const canvas = document.getElementById("map");
      const markerImage = 'https://cdn1.iconfinder.com/data/icons/gpsmapicons/blue/gpsmapicons01.png';

      const latLng = new google.maps.LatLng(-8.0873284,-34.8894201);
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
        // icon: markerImage,
        title: 'Estamos aqui!',
        animation: google.maps.Animation.DROP
      });

      let infowindow = new google.maps.InfoWindow({
        content: `R. Nogueira de Souza, 363, Pina, Recife - PE`,
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
    background-color: orange;
  }
</style>