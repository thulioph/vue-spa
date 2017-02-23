<template>
  <section class="sobre-section">
    <aside class="slide-container">
      <slot name="title"></slot>

      <div>
        <div class="slide-image">
          <slot name="slide-image"></slot>
        </div>

        <div class="slide-header">
          <slot name="slide-title"></slot>
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
  .sobre-section {
    margin-top: 3.5rem; // navbar height
  }

  .slide-container {
    height: auto;
    max-height: 700px;
    background-color: pink;
    width: 100%;
    overflow: hidden;
  }

  .slide-image {
    height: 100%;
    position: relative;
  }
</style>