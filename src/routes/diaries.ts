import { Router } from 'express'
import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils/diary'

const router = Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findByid(Number(req.params.id))

  return diary?
    res.send(diary):
    res.sendStatus(404)
})


router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
  
    res.json(addedDiaryEntry)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
