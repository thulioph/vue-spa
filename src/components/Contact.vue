<template>
  <section class="contato-wrapper">
    <div class="container">
      <div class="columns">
        <aside class="column is-half address-area">
          <h4>Endereços</h4>

          <ul>
            <li>R. Nogueira de Souza, 363 Pina, Recife - PE</li>
            <li>Praça das Piscinas Naturais, Galeria Verdes Mares, 1º Andar, Porto de Galinhas</li>

            <li class="phone">
              <slot name="contact-number"></slot>
            </li>

            <li class="email">
              <a href="mailto:contato@caldinhodonenem.com.br">contato@caldinhodonenem.com.br</a>
            </li>

            <li class="work">
              <a @click="openModal">Trabalhe conosco</a>
            </li>

            <li class="logo">
              <img
                v-if="logo == 'recife'"
                src="../../src/assets/images/logo-recife.png"
                alt="Caldinho do Neném - Pina - Recife">

              <img
                v-if="logo == 'porto'"
                src="../../src/assets/images/logo-porto.png"
                alt="Caldinho do Neném - Porto de Galinhas">
            </li>

            <li class="social">
              <a href="https://fb.com" class="social-link facebook" title="Facebook" target="_blank">
                Facebook
              </a>

              <a href="https://instagram.com" class="social-link instagram" title="Instagram" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </aside>

        <aside class="column is-half form-area">
          <form @submit.prevent="handleSubmit" class="form-primary"
            data-title="Dúvidas, reservas ou sugestões, fale conosco.">
            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.name"
                placeholder="Nome">
            </div>

            <div class="control">
              <input
                class="input"
                type="tel"
                required
                v-model="form.phone"
                placeholder="Telefone">
            </div>

            <div class="control">
              <input
                class="input"
                type="email"
                required
                v-model="form.email"
                placeholder="Email">
            </div>

            <div class="control">
              <textarea
                class="textarea"
                required
                v-model="form.message"
                placeholder="Mensagem">
              </textarea>
            </div>

            <div class="control">
              <button class="button is-primary btn-submit" type="submit">Enviar</button>
            </div>
          </form>
        </aside>
      </div>

      <div class="columns">
        <div class="column">
          <span
            class="notification"
            :class="{
              'is-success': alert.status == 200,
              'is-warning': alert.status != 200
            }"
            v-if="alert.status">
              <button class="delete" @click="hideMessage"></button>

              {{alert.message}}
            </span>
        </div>
      </div>
    </div>

    <cn-modal :active="modalActive"></cn-modal>
  </section>
</template>

<script>
  import cnModal from '../components/Modal.vue';

  let apiUrl = 'https://formspree.io/thulioph@gmail.com';

  export default {
    name: 'Contact',

    components: {
      cnModal
    },

    props: ['logo'],

    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          message: ''
        },
        alert: '',
        modalActive: false
      }
    },

    methods: {
      handleSubmit() {
        this.$http.post(apiUrl, this.form).then(this.success).catch(this.error);
      },

      success(data) {
        if (data.status === 200) {
          this.alert = {
            status: data.status,
            message: 'Mensagem enviada com sucesso.'
          }
        } else {
          this.alert = {
            status: data.status,
            message: 'Ocorreu um erro no envio da sua mensagem, tente novamente em instantes'
          }
        }

        this.form = {};
      },

      error(err) {
        return console.error(err);
      },

      hideMessage() {
        this.alert = {};
      },

      openModal() {
        this.modalActive = !this.modalActive;
      }
    }
  }
</script>

<style lang="scss">
  @mixin before($url) {
    &:after {
      content: '';
      width: 35px;
      height: 35px;
      border-radius: 100%;
      display: inline-block;
      position: absolute;
      top: -4px;
      left: -50px;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
      background-image: url($url);
    }
  }

  .porto {
    .contato-wrapper {
      background-repeat: no-repeat;
      background-size: cover;
      background-color: transparent;
      background-image: url('../assets/images/porto-header.jpg');
    }
  }

  // ====

  .contato-wrapper {
    .columns {
      &:first-child {
        margin-top: 40px;
      }
    }
  }

  .control {
    margin-bottom: 0 !important;
  }

  .input {
    height: 4.285em;
    border-radius: 0;
  }

  .textarea {
    border-radius: 0 0 3px 3px;
  }

  .btn-submit {
    float: right;
    margin-top: 10px;
    background-color: transparent !important;
  }

  .form-primary {
    position: relative;

    &:before {
      content: attr(data-title);
      display: inline-block;
      margin-bottom: 5px;
    }
  }

  .address-area {
    padding-right: 213px;

    h4 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    li {
      font-size: 16px;
      margin-bottom: 10px;
      position: relative;

      &:first-child,
      &:nth-child(2) {
        border-bottom: 1px solid;
        padding-bottom: 10px;

        @include before('../assets/icons/marker.svg');
      }

      &.phone {
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 20px;

        @include before('../assets/icons/phone.svg');
      }

      &.email {
        font-weight: bold;
        font-size: 16px;

        @include before('../assets/icons/email.svg');
      }

      &.work {
        font-weight: bold;
        font-size: 16px;

        @include before('../assets/icons/work.svg');
      }

      &.logo {
        margin: 20px 0;
        width: 200px;
      }

      &.social {
        text-align: left;
        margin-left: 15%;

        a {
          margin: 0 5px;
        }
      }
    }
  }
</style>