<template>
  <section class="sobre-section">
    <aside class="slide-container">
      <slot name="title"></slot>

      <div>
        <div class="slide-header">
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
  $gray: 292929;

  .sobre-section {
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
    min-height: 700px;
    background-color: pink;
    width: 100%;
    overflow: hidden;
  }

  .slide-image {
    height: 700px;
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
      min-height: 560px;
    }

    .slide-image {
      height: 430px;
    }
  }
</style>