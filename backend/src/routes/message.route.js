import { Router } from 'express'
import { getAllContacts, getChats, getMessagesByUserID, sendMessage } from '../controllers/message.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'
import { arcjetProtection } from '../middleware/arcjet.middleware.js'

const router = Router()

router.use(arcjetProtection, protectRoute)

router.get('/contacts', getAllContacts)
router.get('/chats', getChats)
router.get('/:contactID', getMessagesByUserID)
router.post('/send/:contactID', sendMessage)

export default router