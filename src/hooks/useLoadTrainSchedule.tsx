import { type Dispatch } from "react"
import { actions, type Action, type State } from "../state"
import { flatten, range } from 'lodash';

import axios from 'axios';
import type { LiveBoard } from "../types/liveboard";
import type {StationsRoot} from "../types/station";

const irailApiUrl = 'https://api.irail.be';
const lookahead = 3;

export const useLoadTrainSchedule = (state: State, dispatch: Dispatch<Action>) => {
	const reloadTrainSchedule = (async () => {
		try {
			dispatch(actions.loadTrainSchedule({}))
			const now = new Date();
			const pad = (num: number) => num.toString().padStart(2, '0');

			const departures = 
				flatten(await 
					Promise.all(range(0, lookahead).map(async hourPadding => {

						const day = pad(now.getDate());
						const month = pad(now.getMonth() + 1);
						const year = now.getFullYear().toString().slice(-2);
						const date = `${day}${month}${year}`

						const hours = pad(now.getHours() + hourPadding) ;
						const minutes = pad(now.getMinutes());
						const time = `${hours}${minutes}`

						const answer = await axios.get(`${irailApiUrl}/liveboard?station=${state.selectedLocation}&date=${date}&time=${time}&format=json&lang=en&alerts=true`)

						const liveboard = answer.data as LiveBoard;

						return liveboard.departures.departure;
					})))

			const answer =	await axios.get(`${irailApiUrl}/stations?format=json&lang=en&alerts=true`);
			const stations = (answer.data as StationsRoot).station;

			dispatch(actions.loadTrainScheduleSuccess({ departures, stations }))
		} catch(error) {
			dispatch(actions.loadTrainScheduleError({ error: error as Error}))
		}
	})
	return { reloadTrainSchedule }
}
