import express from 'express'
import { perguntarReceita } from '../controllers/receitascontroller.js'

const router = express.Router()

router.post('/perguntar', perguntarReceita)

export default router