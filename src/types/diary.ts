//Personalizacion de los tipos
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'story'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Story = 'story'
}

export enum Visibility {
  Great = 'great',
  Good = 'good', 
  Ok = 'ok', 
  Poor = 'poor'
}

//Tipos de datos que va a manejar los servicios de los diarios
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

//Elige que tipos va a traer
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

//Elige que tipos vas a omitir
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>


//Agrega mas tipos a la interfaz de DiaryEntry
// interface SpecialEntry extends DiaryEntry {
//     flightNumber: number
// }


export type newDiaryEntry = Omit<DiaryEntry, 'id'>