import express from 'express'
import challenge from './challenge'

const router = express.Router()

router.use('/challenge', challenge)

export default router