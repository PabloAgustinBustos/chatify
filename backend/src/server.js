import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js'
import cors from "cors"
import User from './models/User.model.js'

dotenv.config()

const app = express()
const __dirname = path.resolve()

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', async (req, res) => {
  try {
    const users = await User.find()

    return res.status(200).json(users)
  } catch(e) {
    return res.status(500).json('mongo server error')
  }
})

if (ENV.NODE_ENV == 'production') {
  // Establecemos que los archivos estáticos estarán en el dist de frontend
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html')))
}

app.listen(ENV.PORT, () => {
  console.log(`server listening on ${ENV.PORT}`)
  connectDB()
})