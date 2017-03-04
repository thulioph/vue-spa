<template>
  <header id="home" class="is-fixed">
    <div class="prenav">
      <div class="container">
        <div class="columns">
          <div class="nav-left column">
            <a
              href="https://fb.com"
              class="social-link facebook"
              title="Facebook"
              target="_blank">

              facebook
            </a>

            <a
              href="https://instagram.com"
              class="social-link instagram"
              title="Instagram"
              target="_blank">

              instagram
            </a>
          </div>

          <div class="nav-right nav-menu column">
              <p>
                R. Nogueira de Souza, 363 - Pina, Recife - PE, 51110-110
              </p>
          </div>
        </div>
      </div>
    </div>

    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item logo-primary">
            <img src="../assets/images/logo-recife.png" alt="Caldinho do Neném - Recife">
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
        let element = document.getElementById(targetElement).offsetTop - 110;

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
      // wigdow.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss">
  $yellow: #C79C60;
  $white: #FFFFFF;

  .logo-primary {
    width: 110px;
    height: 110px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .prenav {
    height: 50px;
    width: 100%;
    z-index: 10;
    top: 0;
    background-color: $yellow;

    .nav-right {
      text-align: right;

      p {
        line-height: 40px;
        font-weight: bold;
        color: $white;
      }
    }

    .social-link {
      width: 30px;
      height: 30px;
      margin: 5px;
    }
  }

  .is-fixed {
    position: fixed;
    z-index: 100;
    width: 100%;
    left: 0;
    top: 0;
  }

  .nav-item {
    text-transform: uppercase;
    font-weight: bold;
    color: $yellow !important;
    border-size: 4px;

    transition: border, .25s, ease-in-out;

    &:hover {
      border-bottom-color: $yellow !important;
    }

    &.is-active {
      border-bottom-color: $yellow !important;
    }
  }
</style>