<template>
  <div :class="pageClass">
    <cn-header
      :address="map.address"
      :logo="logo"
      id="home">
    </cn-header>

    <cn-slide>
      <div slot="slide-image">
        <slick ref="slick" :options="slickOptions">
          <img
            class="slide-image"
            src="./assets/images/home/home_01.jpg" alt="">
          <img
            class="slide-image"
            src="./assets/images/home/home_02.jpg" alt="">
          <img
            class="slide-image"
            src="./assets/images/home/home_03.jpg" alt="">
          <img
            class="slide-image"
            src="./assets/images/home/home_04.jpg" alt="">
        </slick>
      </div>
    </cn-slide>

    <cn-slide id="sobre" class="sobre-wrapper">
      <h1 slot="slide-title">O Caldinho do Nenem</h1>

      <div slot="slide-image">
        <slick ref="slick" :options="slickOptions">
          <img
            src="./assets/images/o-caldinho/caldinho_01.jpg" alt="">
          <img
            src="./assets/images/o-caldinho/caldinho_02.jpg" alt="">
          <img
            src="./assets/images/o-caldinho/caldinho_03.jpg" alt="">
          <img
            src="./assets/images/o-caldinho/caldinho_04.jpg" alt="">
        </slick>
      </div>

      <p class="container" slot="slide-content">
        O Caldinho do Nenen é o refúgio perfeito para quem busca momentos de descontração entre a família ou cercado de amigos, acompanhados sempre do melhor da gastronomia. A casa tem entre suas especialidades os famosos Caldinhos, eleitos pela revista Veja como o melhor da Cidade. Entre as diversas opções do cardápio estão os frutos do mar, preparados com ingredientes frescos, carnes, aves e ótimas opções para petiscos ou refeições.

        São mais de 20 anos servindo com prazer e atendendo com excelência.

        <br>

        A estrutura do Caldinho do Nenen inclui o maior espaço kids da Cidade, amplo estacionamento com manobrista e área climatizada.

        <br>

        Comprove a nossa qualidade, vem pro Caldinho do Nenen.
      </p>
    </cn-slide>

    <cn-tour id="caldinho360" :link="tourLink">
      <h1 slot="tour-title">Caldinho 360º</h1>
    </cn-tour>

    <cn-slide id="cardapio">
      <h1 slot="slide-title">Cardápio</h1>

      <div slot="slide-image">
        <slick ref="slick" :options="slickOptions">
          <a class="slide-link">
            <img
              src="./assets/images/cardapio/cardapio_01.jpg" alt="">
          </a>

          <a class="slide-link">
            <img
              src="./assets/images/cardapio/cardapio_02.jpg" alt="">
          </a>

          <a class="slide-link">
            <img
              src="./assets/images/cardapio/cardapio_04.jpg" alt="">
          </a>

          <a
            class="slide-link"
            href="./assets/images/cardapio_download.pdf"
            download>
            <img
              src="./assets/images/cardapio/cardapio_04.jpg" alt="">
          </a>
        </slick>
      </div>
    </cn-slide>

    <cn-contact id="contato" :logo="logo">
      <a href="tel:+558134666455" slot="contact-number">
        81 - 3466.6455
      </a>
    </cn-contact>

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
    name: 'AppRecife',

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
          slidesToScroll: 1,
          dots: true,
          speed: 300
        },
        map: {
          coords: [-8.0873686,-34.8893834],
          address: 'R. Nogueira de Souza, 363 Pina, Recife - PE'
        },
        logo: 'recife',
        tourLink: 'https://www.google.com/maps/embed?pb=!1m0!3m2!1spt-BR!2sbr!4v1488653066162!6m8!1m7!1sLk41C_cpD-8AAAQvxYOsKA!2m2!1d-8.087368571040457!2d-34.88938342633912!3f175.72!4f-5.5!5f0.7820865974627469',
        pageClass: ''
      }
    },

    mounted() {
      if (this.$route.name && this.$route.name === 'recife') {
        this.pageClass = this.$route.name;
      }
    }
  }
</script>

<style lang="scss">
  .slide-image {
    max-height: 700px;
  }
</style>