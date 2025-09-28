import { Router } from 'express'
import { signup } from '../controllers/auth.controller.js'

const router = Router()

router.post('/signup', signup)

router.get('/login', (req, res) => {
  res.send('Login')
})

router.get('/logout', (req, res) => {
  res.send('Logout')
})

export default router