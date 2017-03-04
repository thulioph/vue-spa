<template>
  <div>
    <div class="tour-title cursive">
      <slot name="tour-title"></slot>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1spt-BR!2sbr!4v1488603127607!6m8!1m7!1sOsvJ_e5IwJcAAAQvxYSI9Q!2m2!1d-8.50622452407704!2d-35.00052941787942!3f286.3437573928702!4f-12.855706036500791!5f0.7820865974627469&scrollwheel=false" id="tour-iframe" class="tour-iframe" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'cnTour'
  }
</script>

<style lang="scss">
  $yellow: #C79C60;

  .tour-iframe {
    width: 100%;
    height: 630px;
  }

  .tour-title {
    text-align: center;
    font-size: 60px;
    color: $yellow;
    margin: 25px 0;
  }
</style>