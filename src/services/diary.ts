import diaryData from '../data/diaries.json'
import { DiaryEntry } from '../types/types'

const diaries:Array<DiaryEntry>= diaryData as Array<DiaryEntry>

export const getEntries = () => diaries

export const addEntry = () =>  null