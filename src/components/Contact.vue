<template>
  <section>
    <div class="columns">
      <aside class="column is-half address-area">
        <h1>Alo alo</h1>
      </aside>

      <aside class="column is-half form-area">
        <form @submit.prevent="handleSubmit">
          <p class="control">
            <input
              class="input"
              type="text"
              v-model="form.name"
              placeholder="Nome">
          </p>

          <p class="control">
            <input
              class="input"
              type="tel"
              v-model="form.phone"
              placeholder="Telefone">
          </p>

          <p class="control">
            <input
              class="input"
              type="email"
              v-model="form.email"
              placeholder="Email">
          </p>

          <p class="control">
            <textarea
              class="textarea"
              v-model="form.message"
              placeholder="Mensagem">
            </textarea>
          </p>

          <button class="button is-primary" type="submit">Enviar</button>
        </form>
      </aside>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        console.warn(this.form);
      }
    }
  }
</script>

<style lang="scss"></style>