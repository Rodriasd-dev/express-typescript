import { newDiaryEntry } from "../types/diary";
import { Weather, Visibility } from "../types/diary";


const isString = (string:string):boolean => {
    return (typeof string == 'string') 
}

const isDate = (date:string):boolean => {
    return Boolean(Date.parse(date))
}

const isWeather = (params:any):boolean => {
    return Object.values(Weather).includes(params)
}

const isVisibility = (params:any):boolean => {
    return Object.values(Visibility).includes(params)
} 

const parseComment = (commentFromRequest: any):string => {
    if(!isString(commentFromRequest)) {
        throw new Error('Incorrect or nissing comment')
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest:any):string => {
    if(!isDate(dateFromRequest)){
        throw new Error('Incorrect or nissing comment')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest:any):Weather =>{
    if(!String(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('Incorrect or nissing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest:any):Visibility => {
    if(!String(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or nissing visibility')
    }

    return visibilityFromRequest
}

const toNewDiaryEntry = (object:any):newDiaryEntry => {
    const newEntry:newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}

export default toNewDiaryEntry