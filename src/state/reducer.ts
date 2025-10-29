import { type State } from './state';

import { 
  type Action, 
	loadTrainSchedule,
	loadTrainScheduleError,
	loadTrainScheduleSuccess,
	type LoadTrainScheduleError,
	type LoadTrainScheduleSuccess,
} from './actions';


//export const reducerInner = (state: State, action: Action): State => {
export const reducer = (state: State, action: Action): State => {

  if(action.type === loadTrainSchedule) {
    return {
      ...state,
			error: undefined,
			loading: true,
    }
  }
  else if(action.type === loadTrainScheduleSuccess) {
    return {
      ...state,
			stations: (action as LoadTrainScheduleSuccess).stations,
			loading: false,

    }
  }
  else if(action.type === loadTrainScheduleError) {

    return {
      ...state,
			error: (action as LoadTrainScheduleError).error,
			loading: false,
    }
  }
  return state;
}

/*
export const reducer = (state: State, action: Action) => {
  if(action.type !== tick) {
    console.log(`MD -  ${action.type}`);
    console.log({action})
    console.log({state})
  }
  const newState = reducerInner(state, action);

  if(action.type !== tick) {
    console.log({newState})
  }
  return newState;
}
*/
