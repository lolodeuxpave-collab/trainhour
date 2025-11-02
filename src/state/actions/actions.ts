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
	loadGiteaIssueError,
	loadGiteaIssueSuccess,
	loadGiteaIssue,
	setSelectedLocation,
	setConfig,
	loadRssFeeds,
	loadRssFeedsSuccess,
	loadRssFeedsError,
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
	type LoadGiteaIssueError,
	type LoadGiteaIssueSuccess,
	type LoadGiteaIssue,
	type SetSelectedLocation,
	type SetConfig,
	type LoadRssFeeds,
	type LoadRssFeedsSuccess,
	type LoadRssFeedsError,
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
  loadGiteaIssue: (args: Omit<LoadGiteaIssue, "type">) => ({
    type: loadGiteaIssue,
    ...args
  } as LoadGiteaIssue),
  loadGiteaIssueSuccess: (args: Omit<LoadGiteaIssueSuccess, "type">) => ({
    type: loadGiteaIssueSuccess,
    ...args
  } as LoadGiteaIssueSuccess),
  loadGiteaIssueError: (args: Omit<LoadGiteaIssueError, "type">) => ({
    type: loadGiteaIssueError,
    ...args
  } as LoadGiteaIssueError),
  setSelectedLocation: (args: Omit<SetSelectedLocation, "type">) => ({
    type: setSelectedLocation,
    ...args
  } as SetSelectedLocation),
  setConfig: (args: Omit<SetConfig, "type">) => ({
    type: setConfig,
    ...args
  } as SetConfig),
  loadRSSFeeds: (args: Omit<LoadRssFeeds, "type">) => ({
    type: loadRssFeeds,
    ...args
  } as LoadRssFeeds),
  loadRSSFeedsSuccess: (args: Omit<LoadRssFeedsSuccess, "type">) => ({
    type: loadRssFeedsSuccess,
    ...args
  } as LoadRssFeedsSuccess),
  loadRSSFeedsError: (args: Omit<LoadRssFeedsError, "type">) => ({
    type: loadRssFeedsError,
    ...args
  } as LoadRssFeedsError),
}
