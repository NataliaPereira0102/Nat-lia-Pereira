import app from './src/app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Banco conectado com sucesso!')
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Erro ao conectar no banco:', error.message)
  })