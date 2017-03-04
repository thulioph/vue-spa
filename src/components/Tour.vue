<template>
  <div>
    <div class="tour-title cursive">
      <slot name="tour-title"></slot>
    </div>

    <iframe
      :src="link"
      id="tour-iframe"
      class="tour-iframe"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
  export default {
    name: 'cnTour',

    props: ['link']
  }
</script>

<style lang="scss">
  $yellow: #C79C60;

  .tour-iframe {
    width: 100%;
    height: 630px;
    border: 0;
  }

  .tour-title {
    text-align: center;
    font-size: 60px;
    color: $yellow;
    margin: 25px 0;
  }
</style>