<template>
  <div>
    <aside class="address-area"></aside>

    <aside class="form-area">
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
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style lang="scss"></style>