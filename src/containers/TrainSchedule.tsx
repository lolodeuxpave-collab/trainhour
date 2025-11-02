
import { type Dispatch } from 'react';
import {
	type State,
	type Action
} from '../state';

import { Departure } from '../components';
import { NowTime } from '../components/NowTime';
import { SpinnerDiamond } from 'spinners-react';
import type { DepartureType } from '../types/liveboard';
import { Indicator } from '../components/Indicators';

export const filterTrainHour = (delay: number, start: number = 0) => (departure: DepartureType) => {
	const time = new Date(parseInt(departure.time) * 1000);
	const now = new Date();
	const h = time.getHours();
	const m = time.getMinutes();
	const nowInMinutes = (now.getHours() * 60) + now.getMinutes();
	const minutes = h * 60 + m;
	return (nowInMinutes + delay) > minutes && (nowInMinutes + start ) < minutes;;
}

type TrainScheduleProps = {
	dispatch: Dispatch<Action>,
	state: State,
}

export const TrainSchedule = ({ state } : TrainScheduleProps) => {

	const filteredDepartures = state.departures?.filter(filterTrainHour(state.config.trainScheduleShow)) 

	return <>
		<NowTime />
		<Indicator {...{state}} />
		{state.trainScheduleLoading 
			? <SpinnerDiamond />
			: state.trainScheduleError 
			? <em>{state.trainScheduleError?.message}</em>
			: state.departures?.length === 0
			? <em>No more trains for today.</em>
			: filteredDepartures?.map(departure => <Departure  {...{departure}} />)}
	</>
}
