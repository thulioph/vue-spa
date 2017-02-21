<template>
  <div>
    <h1>Escolha pra onde ir..</h1>

    <router-link to="/porto">Porto</router-link>
    <router-link to="/recife">Recife</router-link>

    <router-view></router-view>
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
</style>
