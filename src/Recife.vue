<template>
  <div>
    <cn-header id="home"></cn-header>

    <cn-slide>
      <div slot="slide-image">
        <slick ref="slick" :options="slickOptions">
          <img src="./assets/slides/slide-01.jpg" alt="">
          <img src="./assets/slides/slide-01.jpg" alt="">
          <img src="./assets/slides/slide-01.jpg" alt="">
        </slick>
      </div>
    </cn-slide>

    <cn-slide id="sobre">
      <h1 slot="slide-title">O Caldinho do Nenem</h1>

      <div slot="slide-image">
        <img src="./assets/logo.png" height="200" width="200" alt="">
        <img src="./assets/logo.png" height="200" width="200" alt="">
      </div>

      <p slot="slide-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima tempore, corporis nam odit nostrum aliquam, dolorum excepturi quo pariatur.</p>
    </cn-slide>

    <cn-slide id="cardapio">
      <h1 slot="title">O Caldinho do Nenem</h1>

      <div slot="slide-image">
        <img src="./assets/logo.png" height="200" width="200" alt="">
        <img src="./assets/logo.png" height="200" width="200" alt="">
        <img src="./assets/logo.png" height="200" width="200" alt="">
      </div>

      <p slot="content">O Caldinho do Nenen é o refúgio perfeito para quem busca momentos de descontração entre a família ou cercado de amigos, acompanhados sempre do melhor da gastronomia. A casa tem entre suas especialidades os famosos Caldinhos, eleitos pela revista Veja como o melhor da Cidade. Entre as diversas opções do cardápio estão os frutos do mar, preparados com ingredientes frescos, carnes, aves e ótimas opções para petiscos ou refeições. São mais de 20 anos servindo com prazer e atendendo com excelência. A estrutura do Caldinho do Nenen inclui o maior espaço kids da Cidade, amplo estacionamento com manobrista e área climatizada. Comprove a nossa qualidade, vem pro Caldinho do Nenen.</p>
    </cn-slide>

    <cn-contact id="contato"></cn-contact>

    <cn-map></cn-map>

    <cn-footer></cn-footer>
  </div>
</template>

<script>
  // Components
  import cnHeader from './components/Header.vue';
  import cnSlide from './components/Slide.vue';
  import cnContact from './components/Contact.vue';
  import cnMap from './components/Map.vue';
  import cnFooter from './components/Footer.vue';

  // Libs
  import Slick from 'vue-slick';

  export default {
    name: 'AppRecife',
    components: {
      Slick,
      cnHeader,
      cnSlide,
      cnContact,
      cnMap,
      cnFooter
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
  $white: #FFFFFF;
  $black: #000000;

  .slick-arrow {
    position: absolute;
    z-index: 20;
    top: 42%;
    width: 50px;
    height: 50px;
    background-color: $white;
    text-indent: -9999px;
    cursor: pointer;
    opacity: .6;

    transition: opacity, .25s, linear;

    &:hover {
      opacity: 1;
    }
  }

  .slick-prev {
    left: 5%;
  }

  .slick-next {
    right: 5%;
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