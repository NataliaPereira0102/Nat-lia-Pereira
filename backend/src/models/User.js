import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    cep: {
      type: String
    },
    street: {
      type: String
    },
    neighborhood: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    role: {
      type: String,
      enum: ['patient', 'secretary'],
      default: 'patient'
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User