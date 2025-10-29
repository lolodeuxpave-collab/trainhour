import { useReducer } from 'react'

import { useLoadTrainSchedule } from './hooks/useLoadTrainSchedule'

import { initialState, reducer } from './state'

import './App.css'

function App() {

	const [state, dispatch] = useReducer( reducer, initialState,);

	useLoadTrainSchedule(state, dispatch);

  return (
    <>

			<textarea value={JSON.stringify(state)}></textarea>)
    </>
  )
}

export default App
