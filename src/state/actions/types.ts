export type ActionType = string;

import type {Station} from '../../types';
import type {Article} from '../../types/article';
import type {IssuesResponse} from '../../types/issues';
import type { DepartureType } from '../../types/liveboard';
import type {WeatherData} from '../../types/weather';
import type {RSS} from '../state';
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
	loadGiteaIssueSuccess,
	loadGiteaIssueError,
	loadGiteaIssue,
	setSelectedLocation,
	setConfig,
	loadRssFeeds,
	loadRssFeedsSuccess,
	loadRssFeedsError,
} from './consts'

export type Action = {
	type: ActionType
}

export type LoadTrainSchedule = {
	type: typeof loadTrainSchedule,
}

export type LoadTrainScheduleSuccess = {
	type: typeof loadTrainScheduleSuccess,
	departures: DepartureType[],
	stations: Station[]
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

export type LoadGiteaIssue = {
	type: typeof loadGiteaIssue,
}

export type LoadGiteaIssueSuccess = {
	type: typeof loadGiteaIssueSuccess,
	data: IssuesResponse
}

export type LoadGiteaIssueError = {
	type: typeof loadGiteaIssueError,
	error: Error
}

export type SetSelectedLocation = {
	type: typeof setSelectedLocation,
	location: string,
}

export type SetConfig = {
	type: typeof setConfig,
	setting: string,
	value: string | number,
}

export type LoadRssFeeds = {
	type: typeof loadRssFeeds,
}

export type LoadRssFeedsSuccess = {
	type: typeof loadRssFeedsSuccess,
	feeds: RSS[]
}

export type LoadRssFeedsError = {
	type: typeof loadRssFeedsError,
	feeds: RSS[]
}
