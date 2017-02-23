<template>
  <section>
    <aside class="slide-container">
      <slot name="title"></slot>

      <div>
        <div class="slide-header cursive">
          <slot name="slide-title"></slot>
        </div>

        <div class="slide-image">
          <slot name="slide-image"></slot>
        </div>

        <div class="slide-content">
          <slot name="slide-content"></slot>
        </div>
      </div>

      <slot name="content"></slot>
    </aside>
  </section>
</template>

<script>
  export default {
    name: 'Slide'
  }
</script>

<style lang="scss">
  $yellow: #C79C60;
  $gray: #292929;

  section {
    margin-top: 3.5rem; // navbar height
  }

  .slide-header {
    h1 {
      text-align: center;
      font-size: 60px;
      margin-bottom: 25px;
      color: $yellow;
    }
  }

  .slide-container {
    height: auto;
    max-height: 700px;
    width: 100%;
    overflow: hidden;
  }

  .slide-image {
    max-height: 700px;
    height: auto;
    overflow: hidden;
    position: relative;
  }

  .slide-content {
    font-size: 15px;
    color: $gray;
    text-align: center;

    p {
      margin: 50px 0;
    }

    &:not(p) {
      margin: 0;
    }
  }

  .sobre-wrapper {
    .slide-container {
      max-height: 690px;
    }

    .slide-image {
      max-height: 430px;
    }
  }

  .cardapio-wrapper {
    .slide-image {
      height: 600px;
    }
  }
</style>