import {
	loadTrainSchedule,
	loadTrainScheduleSuccess,
	loadTrainScheduleError,
} from './consts'

import {
	type LoadTrainSchedule,
	type LoadTrainScheduleSuccess,
	type LoadTrainScheduleError,
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
}
