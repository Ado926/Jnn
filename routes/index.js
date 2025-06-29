import { Router } from 'express'
import ytmp3 from '../controllers/ytmp3.js'
import ytmp4 from '../controllers/ytmp4.js'
import spotify from '../controllers/spotify.js'
import apiKeyMiddleware from '../middlewares/apiKey.js'

const router = Router()

router.use(apiKeyMiddleware)

router.get('/ytmp3', ytmp3)
router.get('/ytmp4', ytmp4)
router.get('/spotify', spotify)

export default router
