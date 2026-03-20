<template>
  <div class="container-form">
    <h2>Cadastro</h2>

    <input class="input" v-model="name" placeholder="Nome" />
    <p v-if="erroNome" class="error">Campo obrigatório</p>

    <input class="input" v-model="email" placeholder="Email" />
    <p v-if="erroEmail" class="error">Campo obrigatório</p>

    <input class="input" v-model="password" type="password" placeholder="Senha" />
    <p v-if="erroSenha" class="error">Campo obrigatório</p>

    <input class="input" v-model="cep" placeholder="CEP" @blur="buscarCep" />
    <input class="input" v-model="city" placeholder="Cidade" />

    <button class="btn" @click="register">Cadastrar</button>

    <h2>Login</h2>

    <input class="input" v-model="loginEmail" placeholder="Email" />
    <input class="input" v-model="loginPassword" type="password" placeholder="Senha" />

    <button class="btn" @click="login">Entrar</button>

    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const password = ref('')
const cep = ref('')
const city = ref('')

const loginEmail = ref('')
const loginPassword = ref('')
const message = ref('')

// erros
const erroNome = ref(false)
const erroEmail = ref(false)
const erroSenha = ref(false)

async function buscarCep() {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep.value}/json/`)
    city.value = response.data.localidade
  } catch {
    message.value = 'Erro ao buscar CEP'
  }
}

async function register() {
  erroNome.value = !name.value
  erroEmail.value = !email.value
  erroSenha.value = !password.value

  if (erroNome.value || erroEmail.value || erroSenha.value) {
    message.value = 'Preencha os campos obrigatórios'
    return
  }

  try {
    await axios.post('http://localhost:3000/api/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      cep: cep.value,
      city: city.value
    })

    message.value = 'Cadastro realizado!'
  } catch (error) {
    message.value = error.response?.data?.message || 'Erro no cadastro'
  }
}

async function login() {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      email: loginEmail.value,
      password: loginPassword.value
    })

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    message.value = 'Login realizado!'
  } catch (error) {
    message.value = error.response?.data?.message || 'Erro no login'
  }
}
</script>

<style>
.container-form {
  max-width: 400px;
  margin: auto;
}

.input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.btn {
  padding: 12px;
  margin-top: 10px;
  background: #00c853;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn:hover {
  background: #009624;
}

.error {
  color: red;
  font-size: 13px;
  margin-top: -5px;
  margin-bottom: 10px;
}
</style>