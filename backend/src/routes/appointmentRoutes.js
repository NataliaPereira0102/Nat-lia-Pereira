import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import {
  createAppointment,
  getAppointments,
  deleteAppointment
} from '../controllers/appointmentController.js'

const router = express.Router()

router.post('/', authMiddleware, createAppointment)
router.get('/', authMiddleware, getAppointments)
router.delete('/:id', authMiddleware, deleteAppointment)

export default router