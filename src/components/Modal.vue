<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"></div>

    <div class="modal-content">
      <div class="columns">
        <aside class="column">
          <form @submit.prevent="handleSubmit" class="form-primary"
            data-title="Preencha o formulário abaixo e tente sua vaga conosco!">

            <div class="control">
              <br>
              <h2>Dados Pessoais e Documentação</h2>
              <br>
            </div>

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
                v-model="form.nascimento"
                placeholder="Nascimento">
            </div>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.civil"
                placeholder="Estado Civil">
            </div>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.endereco"
                placeholder="Endereço">

              <input
                class="input"
                type="tel"
                required
                v-model="form.number"
                placeholder="Número">

              <input
                class="input"
                type="text"
                required
                v-model="form.bairro"
                placeholder="Bairro">
            </div>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.cidade"
                placeholder="Cidade">

              <input
                class="input"
                type="text"
                required
                v-model="form.estado"
                placeholder="Estado">

              <input
                class="input"
                type="tel"
                required
                v-model="form.cep"
                placeholder="Cep">
            </div>

            <div class="control">
              <input
                class="input"
                type="tel"
                required
                v-model="form.telefone"
                placeholder="Telefone">

              <input
                class="input"
                type="tel"
                required
                v-model="form.celular"
                placeholder="Celular">

              <input
                class="input"
                type="tel"
                required
                v-model="form.rg"
                placeholder="RG">
            </div>

            <div class="control">
              <input
                class="input"
                type="tel"
                required
                v-model="form.cpf"
                placeholder="CPF">

              <input
                class="input"
                type="tel"
                required
                v-model="form.carteira"
                placeholder="Carteira Profissional">

              <input
                class="input"
                type="tel"
                required
                v-model="form.cnh"
                placeholder="CNH">
            </div>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.categoria"
                placeholder="Categoria">

              <input
                class="input"
                type="email"
                required
                v-model="form.email"
                placeholder="Email">

              <input
                class="input"
                type="text"
                required
                v-model="form.escolaridade"
                placeholder="Escolaridade">
            </div>

            <div class="control">
              <br>
              <h2>Experiência Profissional</h2>
              <br>
            </div>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.emp1.name"
                placeholder="Empresa 1">

              <input
                class="input"
                type="text"
                required
                v-model="form.emp1.funcao"
                placeholder="Funcão">

              <input
                class="input"
                type="tel"
                required
                v-model="form.emp1.fone"
                placeholder="Fone">

              <input
                class="input"
                type="text"
                required
                v-model="form.emp1.periodo"
                placeholder="Período">
            </div>

            <br>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.emp2.name"
                placeholder="Empresa 2">

              <input
                class="input"
                type="text"
                required
                v-model="form.emp2.funcao"
                placeholder="Funcão">

              <input
                class="input"
                type="tel"
                required
                v-model="form.emp2.fone"
                placeholder="Fone">

              <input
                class="input"
                type="text"
                required
                v-model="form.emp2.periodo"
                placeholder="Período">
            </div>

            <br>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.emp3.name"
                placeholder="Empresa 3">

              <input
                class="input"
                type="text"
                required
                v-model="form.emp3.funcao"
                placeholder="Funcão">

              <input
                class="input"
                type="tel"
                required
                v-model="form.emp3.fone"
                placeholder="Fone">

              <input
                class="input"
                type="text"
                required
                v-model="form.emp3.periodo"
                placeholder="Período">
            </div>

            <div class="control">
              <br>
              <h2>Referências Pessoais</h2>
              <br>
            </div>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.ref1.name"
                placeholder="Nome">

              <input
                class="input"
                type="tel"
                required
                v-model="form.ref1.tel"
                placeholder="Telefone">
            </div>

            <br>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.ref2.name"
                placeholder="Nome">

              <input
                class="input"
                type="tel"
                required
                v-model="form.ref2.tel"
                placeholder="Telefone">
            </div>

            <br>

            <div class="control">
              <input
                class="input"
                type="text"
                required
                v-model="form.ref3.name"
                placeholder="Nome">

              <input
                class="input"
                type="tel"
                required
                v-model="form.ref3.tel"
                placeholder="Telefone">
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

    <button class="modal-close" @click="closeModal"></button>
  </div>
</template>

<script>
  let apiUrl = 'https://formspree.io/thulioph@gmail.com';

  export default {
    name: 'Modal',

    props: [
      'active'
    ],

    data() {
      return {
        form: {
          name: '',
          nascimento: '',
          civil: '',
          endereco: '',
          number: '',
          bairro: '',
          cidade: '',
          estado: '',
          cep: '',
          telefone: '',
          celular: '',
          rg: '',
          cpf: '',
          carteira: '',
          cnh: '',
          categoria: '',
          email: '',
          escolaridade: '',

          emp1: {
            name: '',
            funcao: '',
            fone: '',
            periodo: ''
          },
          emp2: {
            name: '',
            funcao: '',
            fone: '',
            periodo: ''
          },
          emp3: {
            name: '',
            funcao: '',
            fone: '',
            periodo: ''
          },
          ref1: { name: '', tel: '' },
          ref2: { name: '', tel: '' },
          ref3: { name: '', tel: '' }
        },
        alert: ''
      };
    },

    methods: {
      closeModal() {
        this.active = false;
      },

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

<style>
  h2 {
    color: #FFFFFF;
    text-transform: uppercase;
  }
</style>