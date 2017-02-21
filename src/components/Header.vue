<template>
  <header id="home">
    <nav class="nav has-shadow is-fixed">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <!-- use is-active class to activate the menu -->
        <div class="nav-right nav-menu">
          <a
            href="#home"
            class="nav-item is-tab  is-active">
            Home
          </a>

          <a
            href="#sobre"
            class="nav-item is-tab is-hidden-mobile">
            O Caldinho
          </a>

          <a
            href="#cardapio"
            class="nav-item is-tab is-hidden-mobile">
            Cardápio
          </a>

          <a
            href="#"
            class="nav-item is-tab is-hidden-mobile">
            Caldinho 360º
          </a>

          <a
            href="#contato"
            class="nav-item is-tab is-hidden-mobile">
            Contato
          </a>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header'
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