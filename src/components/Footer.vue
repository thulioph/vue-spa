<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>© Caldinho do Nenen 2017 - All rights reserved.</p>
        </div>

        <div class="column">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">O Caldinho</a></li>
            <li><a href="#">Cardápio</a></li>
            <li><a href="#">Caldinho 360º </a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  $gray: #888888;
  $white: #FFFFFF;

  .footer {
    background-color: #000;
    padding: 3rem 1.5rem 2rem;

    p, a {
      color: $gray;
    }

    .column {
      &:last-child {
        text-align: right;
      }
    }

    li {
      display: inline-block;
      margin: 0 5px;
      text-transform: uppercase;
    }

    a {
      transition: color, .25s, linear;

      &:hover {
        color: $white;
      }
    }
  }
</style>