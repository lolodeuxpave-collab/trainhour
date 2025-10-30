import styled from 'styled-components';

import { type Dispatch } from 'react';
import {
	type State,
	type Action
} from '../state';

import { Departure } from '../components';
import { NowTime } from '../components/NowTime';

type TrainScheduleProps = {
	dispatch: Dispatch<Action>,
	state: State,
}


export const TrainSchedule = ({ state } : TrainScheduleProps) => {

	return <>
			{state.liveboard?.departures.departure.map(departure => <Departure  {...{departure}} />)}
			<NowTime />
	</>
}
