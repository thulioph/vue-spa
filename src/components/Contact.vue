<template>
  <section>
    <div class="columns">
      <aside class="column is-half address-area">
        <h1>Alo alo</h1>
      </aside>

      <aside class="column is-half form-area">
        <form action="">
          <p class="control">
            <input class="input" type="text" placeholder="Nome">
          </p>

          <p class="control">
            <input class="input" type="tel" placeholder="Telefone">
          </p>

          <p class="control">
            <input class="input" type="email" placeholder="Email">
          </p>

          <p class="control">
            <textarea class="textarea" placeholder="Mensagem"></textarea>
          </p>

          <button class="button is-primary" type="submit">Enviar</button>
        </form>
      </aside>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style lang="scss"></style>