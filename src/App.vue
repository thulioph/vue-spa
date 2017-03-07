<template>
  <div>
    <main class="app-container">
      <section class="choose-box columns">
        <div class="column">
          <router-link
            class="choose-btn recife"
            title="Ir para o site do Pina"
            to="/recife">Pina - Recife</router-link>
        </div>

        <div class="column">
          <h1>Escolha o seu destino</h1>
        </div>

        <div class="column">
          <router-link
            class="choose-btn porto"
            title="Ir para o site de Porto"
            to="/porto">Porto de Galinhas</router-link>
        </div>
      </section>
    </main>

    <footer class="footer-primary columns">
      <aside class="column is-one-third">
        <h3>Endereços:</h3>
        <p>R. Nogueira de Souza, 363, Pina, Recife - PE</p>
        <p>Praça das Piscinas Naturais, Galeria Verdes Mares, 1º Andar, Porto de Galinhas-PE</p>

        <h3>Fone:</h3>
        <a href="tel+558135521962">81 - 3552.1962</a>
      </aside>

      <aside class="column is-one-third">
        <a
          href="https://fb.com"
          class="social-link facebook"
          title="Facebook"
          target="_blank">facebook</a>

        <a
          href="https://instagram.com"
          class="social-link instagram"
          title="Instagram"
          target="_blank">instagram</a>

        <div class="control input-wrapper">
          <input
            class="input"
            type="email"
            v-model="form.email"
            required
            placeholder="cadastre seu email">

          <button
            type="submit"
            @click="receiveEmail"
            class="button is-primary">ok</button>
        </div>

        <div class="control">
          <div v-if="alert.message" class="notification is-info">
            {{alert.message}}
          </div>
        </div>
      </aside>

      <aside class="column is-one-third">
        <h3>Horário de funcionamento:</h3>
        <p>De domingo a Domingo</p>
        <p>das 11h às 00h.</p>
      </aside>
    </footer>
  </div>
</template>

<script>
  let apiUrl = 'https://formspree.io/thulioph@gmail.com';

  export default {
    name: 'app',
    data() {
      return {
        form: { email: '' },
        alert: {
          message: ''
        }
      }
    },
    methods: {
      InitApp() {
        localStorage.setItem('App', true);
      },

      receiveEmail() {
        if (this.form.email !== '' && typeof this.form.email === 'string') {
          this.sendEmail(this.form);
          this.form.email = '';
        }
      },

      sendEmail(email) {
        this.$http.post(apiUrl, email).then(this.success).catch(this.error);
      },

      success(result) {
        if (result.status === 200) {
          this.alert = {
            message: 'Email cadastrado com sucesso!'
          }

          setTimeout(() => this.alert.message = '', 5000);
        }
      },

      error(err) {
        console.error(err);
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/header.scss';
  @import './assets/scss/slide.scss';
  @import './assets/scss/tour.scss';
  @import './assets/scss/contact.scss';

  .app-container {
    position: relative;
    text-align: center;
    min-height: 940px;
    margin-bottom: 0 !important;
    border-bottom: 20px solid;

    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-image: url('./assets/images/bg-index.jpg');
  }

  .choose-box {
    padding: 15% 0 30px 0;

    h1 {
      text-transform: uppercase;
      font-size: 50px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      margin: 90px 40px;
    }
  }

  .choose-btn {
    cursor: pointer;
    width: 265px;
    height: 390px;
    display: inline-block;
    text-transform: uppercase;
    line-height: 780px;
    vertical-align: middle;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;

    &.recife {
      background-image: url('./assets/images/logo-recife.png');
    }

    &.porto {
      background-image: url('./assets/images/logo-porto.png');
    }
  }

  .footer-primary {
    min-height: 250px;

    aside {
      padding: 40px;
      text-align: center;

      &:first-child { text-align: left; }
      &:last-child { text-align: right; }

      h3 {
        margin-top: 12px;
      }
    }
  }

  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: inline-block;
    text-indent: -99999px;
    margin: 0 15px;
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center center;

    &.facebook {
      background-image: url('./assets/icons/facebook.svg');
    }

    &.instagram {
      background-image: url('./assets/icons/instagram.svg');
    }
  }

  .input-wrapper {
    margin-top: 80px;
    margin-left: 20%;

    input { width: 60%; }
  }

  .notification {
    text-align: center;
    margin-top: 20px;
  }
</style>
