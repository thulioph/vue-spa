<template>
  <header id="home">
    <nav class="nav has-shadow is-fixed">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
        </div>

        <span class="nav-toggle" @click="showNavbar = !showNavbar;">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu" :class="{ 'is-active': showNavbar }">
          <a
            href="#home"
            :class="{ 'is-active': this.active == 'home' }"
            @click.prevent="goTo($event)"
            class="nav-item is-tab">
            Home
          </a>

          <a
            href="#sobre"
            :class="{ 'is-active': this.active == 'sobre' }"
            @click.prevent="goTo($event)"
            class="nav-item is-tab">
            O Caldinho
          </a>

          <a
            href="#cardapio"
            :class="{ 'is-active': this.active == 'cardapio' }"
            @click.prevent="goTo($event)"
            class="nav-item is-tab">
            Cardápio
          </a>

          <a
            href="#caldinho360"
            :class="{ 'is-active': this.active == 'caldinho360' }"
            @click.prevent="goTo($event)"
            class="nav-item is-tab">
            Caldinho 360º
          </a>

          <a
            href="#contato"
            :class="{ 'is-active': this.active == 'contato' }"
            @click.prevent="goTo($event)"
            class="nav-item is-tab">
            Contato
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      goTo($event) {
        let targetElement = event.target.hash.replace('#', '');
        let element = document.getElementById(targetElement).offsetTop - 90;

        // collapse the navbar
        this.showNavbar = false;

        // active the clicked element
        this.active = targetElement;

        // scroll body
        window.scrollTo(0, element);
      }
    },
    data() {
      return {
        active: 'home',
        showNavbar: false
      }
    },
    created() {
      // window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      // window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss">
  .is-fixed {
    position: fixed;
    z-index: 100;
    width: 100%;
    left: 0;
    top: 0;
  }
</style>