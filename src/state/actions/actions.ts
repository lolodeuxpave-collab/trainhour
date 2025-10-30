import {
	loadTrainSchedule,
	loadTrainScheduleSuccess,
	loadTrainScheduleError,
	loadWeatherError,
	loadWeatherSuccess,
	loadWeather,
	loadNewsError,
	loadNewsSuccess,
	loadNews,
} from './consts'

import {
	type LoadTrainSchedule,
	type LoadTrainScheduleSuccess,
	type LoadTrainScheduleError,
	type LoadWeatherError,
	type LoadWeatherSuccess,
	type LoadWeather,
	type LoadNewsError,
	type LoadNewsSuccess,
	type LoadNews,
} from './types';

export const actions = {
  loadTrainSchedule: (args: Omit<LoadTrainSchedule, "type">) => ({
    type: loadTrainSchedule,
    ...args
  } as LoadTrainSchedule),
  loadTrainScheduleSuccess: (args: Omit<LoadTrainScheduleSuccess, "type">) => ({
    type: loadTrainScheduleSuccess,
    ...args
  } as LoadTrainScheduleSuccess),
  loadTrainScheduleError: (args: Omit<LoadTrainScheduleError, "type">) => ({
    type: loadTrainScheduleError,
    ...args
  } as LoadTrainScheduleError),
  loadNews: (args: Omit<LoadNews, "type">) => ({
    type: loadNews,
    ...args
  } as LoadNews),
  loadNewsSuccess: (args: Omit<LoadNewsSuccess, "type">) => ({
    type: loadNewsSuccess,
    ...args
  } as LoadNewsSuccess),
  loadNewsError: (args: Omit<LoadNewsError, "type">) => ({
    type: loadNewsError,
    ...args
  } as LoadNewsError),
  loadWeather: (args: Omit<LoadWeather, "type">) => ({
    type: loadWeather,
    ...args
  } as LoadWeather),
  loadWeatherSuccess: (args: Omit<LoadWeatherSuccess, "type">) => ({
    type: loadWeatherSuccess,
    ...args
  } as LoadWeatherSuccess),
  loadWeatherError: (args: Omit<LoadWeatherError, "type">) => ({
    type: loadWeatherError,
    ...args
  } as LoadWeatherError),
}
