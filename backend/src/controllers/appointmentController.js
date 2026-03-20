import Appointment from '../models/Appointment.js'
import { getWeather } from '../services/weatherService.js'

export const createAppointment = async (req, res) => {
  try {
    const { doctor, specialty, date, time } = req.body

    const exists = await Appointment.findOne({
      doctor,
      date,
      time,
      status: { $ne: 'cancelada' }
    })

    if (exists) {
      return res.status(400).json({ message: 'Horário já ocupado' })
    }

    const weather = await getWeather()

    const appointment = await Appointment.create({
      patient: req.user.id,
      doctor,
      specialty,
      date,
      time,
      weather
    })

    res.status(201).json(appointment)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro ao criar consulta' })
  }
}

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate('patient', 'name email')
  res.json(appointments)
}

export const deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id)
  res.json({ message: 'Consulta cancelada' })
}