import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js'

dotenv.config()

const app = express()
const __dirname = path.resolve()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

if (ENV.NODE_ENV == 'production') {
  // Establecemos que los archivos estáticos estarán en el dist de frontend
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html')))
}

app.listen(ENV.PORT, () => {
  console.log(`server listening on ${ENV.PORT}`)
  connectDB()
})