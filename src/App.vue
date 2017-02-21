<template>
  <div>
    <cn-header id="home"></cn-header>

    <cn-slide>
      <div slot="slide-image">
        <img src="./assets/logo.png" height="200" width="200" alt="">
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
import cnHeader from './components/Header.vue';
import cnSlide from './components/Slide.vue';
import cnContact from './components/Contact.vue';
import cnMap from './components/Map.vue';
import cnFooter from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    cnHeader,
    cnSlide,
    cnContact,
    cnMap,
    cnFooter
  }
}
</script>

<style lang="scss">
</style>
