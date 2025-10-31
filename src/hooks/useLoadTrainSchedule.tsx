import { useEffect, type Dispatch } from "react"
import { actions, type Action, type State } from "../state"
import { flatten, range } from 'lodash';

import axios from 'axios';
import type { LiveBoard } from "../types/liveboard";

const irailApiUrl = 'https://api.irail.be';
const lookahead = 3;

export const useLoadTrainSchedule = (_: State, dispatch: Dispatch<Action>) => {
	useEffect(() => {
		(async () => {
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

							const answer = await axios.get(`${irailApiUrl}/liveboard?station=Nivelles&date=${date}&time=${time}&format=json&lang=en&alerts=true`)

							const liveboard = answer.data as LiveBoard;

							return liveboard.departures.departure;
						})))



				dispatch(actions.loadTrainScheduleSuccess({ departures }))
			} catch(error) {
				dispatch(actions.loadTrainScheduleError({ error: error as Error}))
			}
		})()
	}, [])
}
