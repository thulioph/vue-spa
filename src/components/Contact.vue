<template>
  <section class="container">
    <div class="columns">
      <aside class="column is-half address-area">
        <h1>Alo alo</h1>
      </aside>

      <aside class="column is-half form-area">
        <form @submit.prevent="handleSubmit">
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
  </section>
</template>

<script>
  let apiUrl = 'https://formspree.io/thulioph@gmail.com';

  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          message: ''
        },
        alert: ''
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
      }
    }
  }
</script>

<style lang="scss">
  $yellow: #C79C60;
  $black: #000000;

  .control {
    margin-bottom: 0 !important;
  }

  .input {
    height: 3.285em;
    border-radius: 0;
    border-color: $yellow;
    color: $yellow;

    &:active, &:focus, &:hover {
      border-color: $black;
    }
  }

  .textarea {
    border-color: $yellow;
    color: $yellow;

    &:active, &:focus, &:hover {
      border-color: $black;
    }
  }

  .btn-submit {
    float: right;
    margin-top: 10px;
    background-color: transparent !important;
    color: $yellow !important;

    &:hover {
      background-color: $yellow !important;
      color: $black !important;
    }
  }

</style>