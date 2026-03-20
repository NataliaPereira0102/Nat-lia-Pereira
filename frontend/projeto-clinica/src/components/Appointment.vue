<template>
  <div>
    <h2>Agendar Consulta</h2>

    <select class="input" v-model="doctor">
      <option value="">Selecione o médico</option>
      <option v-for="d in doctors" :key="d.name" :value="d.name">
        {{ d.name }} - {{ d.specialty }}
      </option>
    </select>

    <input class="input" v-model="date" type="date" />
    <input class="input" v-model="time" type="time" />

    <button class="btn" @click="agendar">Agendar</button>

    <p>{{ message }}</p>

    <h3>Consultas</h3>

    <ul v-if="appointments.length">
  <li v-for="a in appointments" :key="a._id">
    👩‍⚕️ {{ a.doctor }} - {{ a.date }} {{ a.time }}  
    🌦️ {{ a.weather }}
  </li>
</ul>

<p v-else>Nenhuma consulta agendada</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const doctor = ref('')

const erroNome = ref(false)
const erroEmail = ref(false)
const erroSenha = ref(false)

const date = ref('')
const time = ref('')
const message = ref('')
const appointments = ref([])

const doctors = [
  { name: 'Dra. Camila ', specialty: 'Clínico Geral' },
  { name: 'Dra. Danyele ', specialty: 'Psicologia' },
  { name: 'Dr. Leonardo', specialty: 'Cardiologista' },
  { name: 'Dr. Paulo', specialty: 'Pediatra' },
  { name: 'Dr. Fernando', specialty: 'Oftalmologista' },
  { name: 'Dra. Gabriela ', specialty: 'Geriatria' },
]


const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

async function agendar() {
  if (!doctor.value || !date.value || !time.value) {
    message.value = 'Preencha todos os campos'
    return
  }

  try {
    await api.post('/appointments', {
      doctor: doctor.value,
      specialty: '',
      date: date.value,
      time: time.value
    })

    message.value = 'Consulta agendada com sucesso!'
    carregar()
  } catch (error) {
    message.value = error.response?.data?.message || 'Erro ao agendar'
  }
}
  

async function carregar() {
  const response = await api.get('/appointments')
  appointments.value = response.data
}

async function remover(id) {
  await api.delete(`/appointments/${id}`)
  carregar()
}

onMounted(() => {
  carregar()
})
</script>

<style>
.input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
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

.delete {
  margin-left: 10px;
  background: #ff5252;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}
</style>