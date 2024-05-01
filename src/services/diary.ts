import diaryData from '../data/diaries.json'
import { DiaryEntry } from '../types/types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries

export const addEntry = () => null
