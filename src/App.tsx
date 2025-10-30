import { useReducer } from 'react'

import { useLoadTrainSchedule } from './hooks/useLoadTrainSchedule'

import { initialState, reducer } from './state'

import './App.css'
import { NewsWidget, TrainSchedule, WeatherWidget } from './containers';
import {useNewsApi, useWeatherApi} from './hooks';
import styled from 'styled-components';

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

	const [state, dispatch] = useReducer( reducer, initialState,);

	useLoadTrainSchedule(state, dispatch);
	useNewsApi({state, dispatch});
	useWeatherApi({state, dispatch});

  return (
		<Container>
		<Pane>
			<h1>Next trains</h1>
			<TrainSchedule {...{ state, dispatch }} />
		 </Pane>
		 <Pane>
				<h1>News</h1>
				<NewsWidget {...{ state, dispatch }} />
				<h1>Weather</h1>
				<WeatherWidget {...{ state, dispatch }} />
		 </Pane>
	</Container>
  )
}

export default App
