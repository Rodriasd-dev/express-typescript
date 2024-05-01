import diaryData from '../data/diaries.json'
import { DiaryEntry,NonSensitiveInfoDiaryEntry } from '../types/types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = ():DiaryEntry[] => diaries

export const findByid = (id:number):DiaryEntry|undefined  =>{
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const getEntriesWithoutSensitiveInfo = ():NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addEntry = ():undefined => undefined


