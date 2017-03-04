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
  import Slick from 'vue-slick';

  export default {
    name: 'Slide',

    components: {
      Slick
    },

    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 300
        }
      }
    }
  }
</script>

<style lang="scss">
  $yellow: #C79C60;
  $gray: #292929;
  $white: #FFFFFF;
  $black: #000000;

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
      margin-top: 50px;
    }

    &:not(p) {
      margin: 0;
    }
  }

  //
  // Different styles per page
  //

  .sobre-wrapper {
    .slide-container {
      max-height: 100%;
    }

    .slide-image {
      max-height: 430px;
    }
  }

  //
  // Adjusts on slick carousel
  //

  .slick-arrow {
    position: absolute;
    z-index: 10;
    top: 42%;
    width: 50px;
    height: 50px;
    background-color: $white;
    text-indent: -9999px;
    cursor: pointer;
    opacity: .6;
    background-repeat: no-repeat;
    background-position: center center;

    transition: opacity, .25s, linear;

    &:hover {
      opacity: 1;
    }
  }

  .slick-prev {
    left: 5%;
    transform: rotate(180deg);
    background-image: url('../assets/icons/arrow.svg');
  }

  .slick-next {
    right: 5%;
    background-image: url('../assets/icons/arrow.svg');
  }

  .slick-dots {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;

    li {
      display: inline-block;
      margin: 0 10px;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      text-indent: -999px;
      background: $white;
      opacity: .6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      &.slick-active {
        opacity: 1;
      }

      button {
        visibility: hidden;
      }
    }
  }
</style>