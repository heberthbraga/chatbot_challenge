import express from 'express'
import ChallengeController from '../controllers/ChallengeController'

const router = express.Router()

router.get('/start', ChallengeController.start)

export default router

