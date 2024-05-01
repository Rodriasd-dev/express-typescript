import { Router } from 'express'
import * as diaryServices from '../services/diary'

const router = Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Seaving a diary!')
})

export default router
