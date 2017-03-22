<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>© Caldinho do Nenen 2017 - All rights reserved.</p>
        </div>

        <div class="column">
          <ul>
            <li>
              <a
                href="#home"
                @click.prevent="goTo($event)">
                Home
              </a>
            </li>

            <li>
              <a
                href="#sobre"
                @click.prevent="goTo($event)">
                O Caldinho
              </a>
            </li>

            <li>
              <a
                href="#cardapio"
                @click.prevent="goTo($event)">
                Cardápio
              </a>
            </li>

            <li>
              <a
                href="#caldinho360"
                @click.prevent="goTo($event)">
                Caldinho 360º
              </a>
            </li>

            <li>
              <a
                href="#contato"
                @click.prevent="goTo($event)">
                Contato
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      goTo(event) {
        let targetElement = event.target.hash.replace('#', '');
        let element = document.getElementById(targetElement).offsetTop - 110;

        // collapse the navbar
        this.showNavbar = false;

        // active the clicked element
        this.active = targetElement;

        // scroll body
        window.scrollTo(0, element);
      }
    }
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