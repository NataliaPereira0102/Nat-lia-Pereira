import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      cep,
      street,
      neighborhood,
      city,
      state,
      role
    } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' })
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ message: 'Este email já está cadastrado.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      cep,
      street,
      neighborhood,
      city,
      state,
      role
    })

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário.', error: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Senha inválida.' })
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    res.status(200).json({
      message: 'Login realizado com sucesso!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login.', error: error.message })
  }
}