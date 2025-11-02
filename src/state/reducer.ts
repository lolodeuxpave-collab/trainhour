import { type State } from './state';

import { 
  type Action, 
	loadTrainSchedule,
	loadTrainScheduleError,
	loadTrainScheduleSuccess,
	loadNews,
	loadNewsSuccess,
	loadNewsError,
	loadWeatherError,
	loadWeatherSuccess,
	loadWeather,
	type LoadTrainScheduleError,
	type LoadTrainScheduleSuccess,
	type LoadWeatherError,
	type LoadWeatherSuccess,
	type LoadNewsError,
	type LoadNewsSuccess,
	loadGiteaIssueSuccess,
	loadGiteaIssue,
	type LoadGiteaIssueSuccess,
	loadGiteaIssueError,
	type LoadGiteaIssueError,
	setSelectedLocation,
	type SetSelectedLocation,
	setConfig,
	type LoadRssFeedsSuccess,
	type SetConfig,
	loadRssFeeds,
	loadRssFeedsSuccess,
} from './actions';


export const reducerInner = (state: State, action: Action): State => {
//export const reducer = (state: State, action: Action): State => {

  if(action.type === loadTrainSchedule) {
    return {
      ...state,
			trainScheduleError: undefined,
			trainScheduleLoading: true,
    }
  }
  else if(action.type === loadTrainScheduleSuccess) {
    return {
      ...state,
			departures: (action as LoadTrainScheduleSuccess).departures,
			stations: (action as LoadTrainScheduleSuccess).stations,
			trainScheduleLoading: false,
    }
  }
  else if(action.type === loadTrainScheduleError) {
    return {
      ...state,
			trainScheduleError: (action as LoadTrainScheduleError).error,
			trainScheduleLoading: false,
    }
  }
  if(action.type === loadNews) {
    return {
      ...state,
			newsError: undefined,
			newsLoading: true,
    }
  }
  else if(action.type === loadNewsSuccess) {
    return {
      ...state,
			news: (action as LoadNewsSuccess).news,
			newsLoading: false,
    }
  }
  else if(action.type === loadNewsError) {
    return {
      ...state,
			newsError: (action as LoadNewsError).error,
			newsLoading: false,
    }
  }
  if(action.type === loadWeather) {
    return {
      ...state,
			weatherError: undefined,
			weatherLoading: true,
    }
  }
  else if(action.type === loadWeatherSuccess) {
    return {
      ...state,
			weather: (action as LoadWeatherSuccess).weather,
			weatherLoading: false,
    }
  }
  else if(action.type === loadWeatherError) {
    return {
      ...state,
			weatherError: (action as LoadWeatherError).error,
			weatherLoading: false,
    }
  }
	else if(action.type === loadGiteaIssue) {
    return {
      ...state,
			issuesError: undefined,
			issuesLoading: true,
    }
  }
  else if(action.type === loadGiteaIssueSuccess) {
    return {
      ...state,
			issues: (action as LoadGiteaIssueSuccess).data,
			issuesLoading: false,
    }
  }
  else if(action.type === loadGiteaIssueError) {
    return {
      ...state,
			issuesLoading: false,
			issuesError: (action as LoadGiteaIssueError).error,
    }
  }
	else if(action.type === loadRssFeeds) {
    return {
      ...state,
			rssLoading: true,
    }
  }
  else if(action.type === loadRssFeedsSuccess) {
    return {
      ...state,
			rss: (action as LoadRssFeedsSuccess).feeds,
    }
  }
  else if(action.type === loadGiteaIssueError) {
    return {
      ...state,
			issuesLoading: false,
			issuesError: (action as LoadGiteaIssueError).error,
    }
  }
  else if(action.type === setSelectedLocation) {
    return {
      ...state,
			selectedLocation: (action as SetSelectedLocation).location,
    }
  }
  else if(action.type === setConfig) {
    return {
      ...state,
			config: {
				...state.config,
				[(action as SetConfig).setting]: (action as SetConfig).value
			}
    }
  }
  return state;
}

export const reducer = (state: State, action: Action) => {
	console.log(`TS -  ${action.type}`);
	console.log({action})
	console.log({state})
  const newState = reducerInner(state, action);

	console.log({newState})
  return newState;
}
