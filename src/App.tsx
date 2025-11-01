import { useReducer, useState } from 'react'

import { useLoadTrainSchedule } from './hooks/useLoadTrainSchedule'

import { actions, initialState, reducer } from './state'

import './App.css'
import { NewsWidget, TrainSchedule, WeatherWidget } from './containers';
import {useGiteaApi, useNewsApi, useWeatherApi} from './hooks';
import styled from 'styled-components';
import {IssueWidget} from './containers/IssuesWidget';
import {IoSettingsSharp} from 'react-icons/io5';
import type {Station} from './types';
//import {NativeSelectRoot} from '@chakra-ui/react';



const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  gap: 2rem;
`;

const Pane = styled.div`
	max-width: 45vw;
`;


function App() {

	const [state, dispatch] = useReducer( reducer, initialState, );
	const [settingOpened, setSettingOpened] = useState(false);


	const { reloadTrainSchedule } = useLoadTrainSchedule(state, dispatch);
	const { reloadNews } = useNewsApi({state, dispatch});
	const { reloadWeather } = useWeatherApi({state, dispatch});
	const { reloadIssues } = useGiteaApi({state, dispatch})

	const { selectedLocation } = state;
	const setSelectedLocation = (location: string) => { 
		dispatch(actions.setSelectedLocation({ location }))
		reloadNews();
		reloadWeather();
		reloadIssues();
		reloadTrainSchedule();
	}

	const mainContent = <>
			<Pane>
				<h2>Next trains in {state.selectedLocation}</h2>
				<TrainSchedule {...{ state, dispatch }} />
			</Pane>
			<Pane>
					<h2>Weather</h2>
					<WeatherWidget {...{ state, dispatch }} />
					<h2>Issues</h2>
					<IssueWidget {...{ state, dispatch }} />
					<h2>News</h2>
					<NewsWidget {...{ state, dispatch }} />
				</Pane>
			</>

	const settingContent = <> 
		<Pane>
			<select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
				{state.stations?.map((option: Station) => <option value={option.name}>{option.name}</option>)}
			</select>
		</Pane>
	</>

  return (
		<>
			<Container>
				<div onClick={() => setSettingOpened(!settingOpened)}><IoSettingsSharp size={40}/></div>	
				{settingOpened ? settingContent: mainContent}
			</Container>
		</>
  )
}

export default App
