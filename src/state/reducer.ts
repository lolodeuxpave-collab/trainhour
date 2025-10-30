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
			liveboard: (action as LoadTrainScheduleSuccess).liveboard,
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
