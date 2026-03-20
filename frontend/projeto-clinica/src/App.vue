<template>
  <div class="container">
    <h1>Agende já sua Consulta</h1>

    <div class="card">
      <Login />
    </div>

    <div class="card">
      <Appointment />
    </div>
  </div>
</template>

<script setup>
import Login from './components/Login.vue'
import Appointment from './components/Appointment.vue'
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  margin: 0;
}

.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: white;
}

.card {
  background: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

h2 {
  margin-bottom: 10px;
}

ul {
  padding-left: 15px;
}

</style>
