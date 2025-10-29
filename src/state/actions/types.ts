export type ActionType = string;

import type { Station } from '../../types';
import { loadTrainSchedule, loadTrainScheduleError, loadTrainScheduleSuccess } from './consts'

export type Action = {
	type: ActionType
}

export type LoadTrainSchedule = {
	type: typeof loadTrainSchedule,
}

export type LoadTrainScheduleSuccess = {
	type: typeof loadTrainScheduleSuccess,
	stations: Station[]
}

export type LoadTrainScheduleError = {
	type: typeof loadTrainScheduleError,
	error: Error
}

