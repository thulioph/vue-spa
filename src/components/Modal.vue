<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"></div>

    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
    </div>

    <button class="modal-close" @click="closeModal"></button>
  </div>
</template>

<script>
  export default {
    name: 'modal',

    props: [
      'active'
    ],

    methods: {
      closeModal() {
        this.active = false;
      }
    }
  }
</script>

<style></style>