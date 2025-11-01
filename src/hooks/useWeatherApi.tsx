import { useEffect, type Dispatch } from "react"
import { actions, type Action, type State } from "../state"
import type {WeatherData} from "../types/weather";

export type UseWeatherApiProps = {
	dispatch: Dispatch<Action>,
	state: State
}

export const useWeatherApi = ({ dispatch, state }: UseWeatherApiProps) => {

	const reloadWeather = (async () => {
		try {
			const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=176d6e98c8894466aa6205455253010&q=${state.selectedLocation}&aqi=no`;

			dispatch(actions.loadWeather({}));
			const answer = await fetch(weatherApiUrl);
			const weather = await answer.json() as WeatherData;
			dispatch(actions.loadWeatherSuccess({ weather }));
		} catch(error) {
			dispatch(actions.loadWeatherError({ error: error as Error }));
		}
	});
	useEffect(() => {
		reloadWeather();
	}, [])
	return { reloadWeather }
}
