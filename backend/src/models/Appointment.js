import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    doctor: String,
    specialty: String,
    date: String,
    time: String,
    weather: String,
    status: {
      type: String,
      default: 'agendada'
    }
  },
  { timestamps: true }
)

export default mongoose.model('Appointment', appointmentSchema)