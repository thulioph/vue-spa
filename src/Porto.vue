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

    <cn-slide id="sobre" class="sobre-wrapper">
      <h1 slot="slide-title">O Caldinho do Nenem</h1>

      <div slot="slide-image">
        <slick ref="slick" :options="slickOptions">
          <img src="./assets/slides/slide-02.jpg" alt="">
          <img src="./assets/slides/slide-02.jpg" alt="">
          <img src="./assets/slides/slide-02.jpg" alt="">
        </slick>
      </div>

      <p class="container" slot="slide-content">
        O Caldinho do Nenen é o refúgio perfeito para quem busca momentos de descontração entre a família ou cercado de amigos, acompanhados sempre do melhor da gastronomia. A casa tem entre suas especialidades os famosos Caldinhos, eleitos pela revista Veja como o melhor da Cidade. Entre as diversas opções do cardápio estão os frutos do mar, preparados com ingredientes frescos, carnes, aves e ótimas opções para petiscos ou refeições. São mais de 20 anos servindo com prazer e atendendo com excelência. <br>
        A estrutura do Caldinho do Nenen inclui o maior espaço kids da Cidade, amplo estacionamento com manobrista e área climatizada. Comprove a nossa qualidade, vem pro Caldinho do Nenen.
      </p>
    </cn-slide>

    <cn-tour id="caldinho360" :link="tourLink">
      <h1 slot="tour-title">Caldinho 360º</h1>
    </cn-tour>

    <cn-slide id="cardapio">
      <div slot="slide-image">
        <slick ref="slick" :options="slickOptions">
          <img src="./assets/slides/slide-03.jpg" alt="">
          <img src="./assets/slides/slide-03.jpg" alt="">
          <img src="./assets/slides/slide-03.jpg" alt="">
          <img src="./assets/slides/slide-03.jpg" alt="">
        </slick>
      </div>
    </cn-slide>

    <cn-contact id="contato"></cn-contact>

    <cn-map
      :coords="map.coords"
      :address="map.address">
    </cn-map>

    <cn-footer></cn-footer>
  </div>
</template>

<script>
  // Components
  import cnHeader from './components/Header.vue';
  import cnSlide from './components/Slide.vue';
  import cnContact from './components/Contact.vue';
  import cnMap from './components/Map.vue';
  import cnTour from './components/Tour.vue';
  import cnFooter from './components/Footer.vue';

  // Libs
  import Slick from 'vue-slick';

  export default {
    name: 'AppPorto',

    components: {
      Slick,
      cnHeader,
      cnSlide,
      cnContact,
      cnMap,
      cnTour,
      cnFooter
    },

    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 300
        },
        map: {
          coords: [-8.5062245,-35.0005294],
          address: 'Praça das Piscinas Naturais, Galeria Verdes Mares, 1º Andar, Porto de Galinhas'
        },
        tourLink: 'https://www.google.com/maps/embed?pb=!1m0!3m2!1spt-BR!2sbr!4v1488653096719!6m8!1m7!1sOsvJ_e5IwJcAAAQvxYSI9Q!2m2!1d-8.50622452407704!2d-35.00052941787942!3f287.87!4f-11.900000000000006!5f0.7820865974627469'
      }
    }
  }
</script>

<style lang="scss">
  .my-slide {
    height: 700px;

    &:first-child {
      background-color: red;
    }
  }
</style>