import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.send('Fetching all entry diaries')
})

router.post('/', (_req, res) => {
  res.send('Seaving a diary!')
})

export default router
