import { useEffect, type Dispatch } from "react"
import { actions, type Action, type State } from "../state"

import type { Data } from "../types";

import axios from 'axios';

const irailApiUrl = 'https://api.irail.be';

export const useLoadTrainSchedule = (_: State, dispatch: Dispatch<Action>) => {
	useEffect(() => {
		(async () => {
			try {
				dispatch(actions.loadTrainSchedule({}))
				const answer = await axios.get(`${irailApiUrl}/stations?format=json&lang=en`)
				const { station } = answer.data as Data;
				dispatch(actions.loadTrainScheduleSuccess({ stations: station }))
			} catch(error) {
				dispatch(actions.loadTrainScheduleError({ error: error as Error}))
			}
		})()
	}, [])
}
