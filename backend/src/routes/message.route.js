import { Router } from 'express'

const router = Router()

router.get('/send', (req, res) => {
  res.send('send message')
})

export default router