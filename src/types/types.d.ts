export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'story'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number,
    data: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

// interface SpecialEntry extends DiaryEntry {
//     flightNumber: number
// }