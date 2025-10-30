export type ActionType = string;

import type {Article} from '../../types/article';
import type { LiveBoard } from '../../types/liveboard';
import type {WeatherData} from '../../types/weather';
import { 
	loadTrainSchedule, 
	loadTrainScheduleError, 
	loadTrainScheduleSuccess,
	loadNews, 
	loadNewsError, 
	loadNewsSuccess,
	loadWeather, 
	loadWeatherError, 
	loadWeatherSuccess,
} from './consts'

export type Action = {
	type: ActionType
}

export type LoadTrainSchedule = {
	type: typeof loadTrainSchedule,
}

export type LoadTrainScheduleSuccess = {
	type: typeof loadTrainScheduleSuccess,
	liveboard: LiveBoard
}

export type LoadTrainScheduleError = {
	type: typeof loadTrainScheduleError,
	error: Error
}

export type LoadNews = {
	type: typeof loadNews,
}

export type LoadNewsSuccess = {
	type: typeof loadNewsSuccess,
	news: Article[]
}

export type LoadNewsError = {
	type: typeof loadNewsError,
	error: Error
}


export type LoadWeather = {
	type: typeof loadWeather,
}

export type LoadWeatherSuccess = {
	type: typeof loadWeatherSuccess,
	weather: WeatherData
}

export type LoadWeatherError = {
	type: typeof loadWeatherError,
	error: Error
}

