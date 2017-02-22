<template>
  <div>
    <main class="app-container">
      <section class="choose-box">
        <router-link
          class="choose-btn recife"
          to="/recife">Pina - Recife</router-link>

        <h1>Escolha o seu destino</h1>

        <router-link
          class="choose-btn porto"
          to="/porto">Porto de Galinhas</router-link>
      </section>
    </main>

    <footer class="footer-primary"></footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    InitApp() {
      localStorage.setItem('App', true);
    }
  }
}
</script>

<style lang="scss">
  $orange: #E1B725;
  $black: #282828;
  $white: #FFFFFF;

  .app-container {
    position: relative;
    min-height: 940px;
    border-bottom: 20px solid $orange;

    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-image: url('./assets/bg-index.jpg');
  }

  .choose-box {
    position: absolute;
    // z-index: 1;
    top: 50%;
    left: 50%;
    margin-left: -560px;
    margin-top: -305px;

    h1 {
      text-transform: uppercase;
      font-size: 50px;
      color: $white;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      margin: 0 40px;
      width: 40%;
    }
  }

  .choose-btn {
    cursor: pointer;
    width: 265px;
    height: 390px;
    display: inline-block;
    text-transform: uppercase;
    color: $white;
    line-height: 780px;
    vertical-align: middle;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;

    &.recife {
      background-image: url('./assets/logo-recife.png');
    }

    &.porto {
      background-image: url('./assets/logo-porto.png');
    }
  }

  .footer-primary {
    background-color: $black;
    min-height: 250px;
  }
</style>
