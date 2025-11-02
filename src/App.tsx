import { useCallback, useEffect, useReducer, useState } from 'react'

import { useLoadTrainSchedule } from './hooks/useLoadTrainSchedule'

import { useLocalStorage } from "@uidotdev/usehooks";

import { actions, initialState, reducer, type Action, type State } from './state'

import './App.css'
import { IoSettingsSharp } from 'react-icons/io5';
import styled from "styled-components";

import { NewsWidget, TrainSchedule, WeatherWidget } from './containers';
import {useGiteaApi, useNewsApi, useRssFeed, useWeatherApi} from './hooks';
import {IssueWidget} from './containers/IssuesWidget';
import type {Station} from './types';
import {RssWidget} from './containers/RssWidget';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  gap: 2rem;
`;

const Pane = styled.div`
	max-width: 45vw;
`;


const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #1e1e2f;
  color: #f1f1f1;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
`;

const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2a2a40;
  padding: 0.75rem 1rem;
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: #b0b0c0;
`;

const Select = styled.select`
  background: #3a3a55;
  color: #fff;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  width: 60%;
  cursor: pointer;

  &:hover {
    background: #4a4a6a;
  }
`;

const Input = styled.input`
  background: #3a3a55;
  color: #fff;
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  width: 60px;
  text-align: center;
  outline: none;

  &:focus {
    background: #4a4a6a;
  }
`;

const TextArea = styled.textarea`
  background: #3a3a55;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  width: calc(100% - 2em);
  height: 80px;
  resize: vertical;
  outline: none;

  &:focus {
    background: #4a4a6a;
  }
`;


export const Button = styled.button`
  background: #4a4a6a;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    background: #5b5b7a;
    transform: translateY(-1px);
  }

  &:active {
    background: #3a3a55;
    transform: translateY(0);
  }

  &:disabled {
    background: #2a2a40;
    color: #999;
    cursor: not-allowed;
  }
`;

// Credit to https://www.benmvp.com/blog/sync-localstorage-react-usereducer-hook/
const usePersistReducer = () => {
  const [savedState, saveState] = useLocalStorage(
    'state',
    initialState,
  )

  // wrap `reducer` with a memoized function that
  // syncs the `newState` to `localStorage` before
  // returning `newState`. memoizing is important!
  const reducerLocalStorage = useCallback(
    (state: State, action: Action) => {

      const newState = reducer(state, action)

      saveState(newState)

      return newState
    },
    [saveState],
  )

  // use wrapped reducer and the saved value from
  // `localStorage` as params to `useReducer`.
  // this will return `[state, dispatch]`
  return useReducer(reducerLocalStorage, savedState)
}


function App() {

	const [state, dispatch] = usePersistReducer();
	const [settingOpened, setSettingOpened] = useState(false);

	const { reloadTrainSchedule } = useLoadTrainSchedule(state, dispatch);
	const { reloadNews } = useNewsApi({state, dispatch});
	const { reloadWeather } = useWeatherApi({state, dispatch});
	const { reloadIssues } = useGiteaApi({state, dispatch})
	const { reloadRssFeed } = useRssFeed({state, dispatch})

	const { selectedLocation } = state;
	const setSelectedLocation = (location: string) => { 
		dispatch(actions.setSelectedLocation({ location }))
	}

	useEffect(() => {
		reloadNews();
		reloadWeather();
		reloadIssues();
		reloadTrainSchedule();
		reloadRssFeed();
	}, [selectedLocation, state.config])

	const mainContent = <>
			<Pane>
				<h2>Next trains in {state.selectedLocation}</h2>
				<TrainSchedule {...{ state, dispatch }} />
				{state.config.rssFollow.length > 0
					? <>
						<h2>RSS Feed</h2>
						<RssWidget {...{ state, dispatch }} />
					</>
					: <></>
				}
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


	const { 
		trainScheduleShow,
		trainDelayCompute,
		trainCancelCompute,
		rssFollow,
	} = state.config;

	const setTrainScheduleShow = (value: number) => dispatch(actions.setConfig({ setting: 'trainScheduleShow', value }));
	const setTrainDelayCompute = (value: number) =>  dispatch(actions.setConfig({ setting: 'trainDelayCompute', value }));
	const setTrainCancelCompute = (value: number) => dispatch(actions.setConfig({ setting: 'trainCancelCompute', value }));

	const setRssFollow = (value: string) => dispatch(actions.setConfig({ setting: 'rssFollow', value }));

	const settingContent = (
  <Pane>
    <SettingContainer>
      <FieldGroup>
        <Label>Location</Label>
        <Select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          {state.stations?.map((option: Station) => (
            <option key={option.name} value={option.name}>{option.name}</option>
          ))}
        </Select>
      </FieldGroup>

      <FieldGroup>
        <Label>Show Schedule</Label>
        <Input
          type="number"
          value={trainScheduleShow}
          onChange={e => setTrainScheduleShow(parseInt(e.target.value))}
        />
				min
      </FieldGroup>

      <FieldGroup>
        <Label>Compute Delay</Label>
        <Input
          type="number"
          value={trainDelayCompute}
          onChange={e => setTrainDelayCompute(parseInt(e.target.value))}
        />
				min
      </FieldGroup>

      <FieldGroup>
        <Label>Compute Cancellation</Label>
        <Input
          type="number"
          value={trainCancelCompute}
          onChange={e => setTrainCancelCompute(parseInt(e.target.value))}
        />
				min
      </FieldGroup>

      <div>
        <Label>RSS Feed</Label>
        <TextArea
          value={rssFollow}
          onChange={e => setRssFollow(e.target.value)}
        />
      </div>
			<Button onClick={() => setSettingOpened(false)}>Close</Button>
    </SettingContainer>
  </Pane>
	);

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
