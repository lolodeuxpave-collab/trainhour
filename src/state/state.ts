import type { Article } from "../types/article";
import type { LiveBoard } from "../types/liveboard";
import type { WeatherData } from "../types/weather";

export type State = { 
	trainScheduleLoading: boolean,
	liveboard: LiveBoard | undefined,
	trainScheduleError: Error | undefined,	

	weather: WeatherData | undefined,
	weatherLoading: boolean,
	weatherError: Error | undefined,	

	news: Article[] | undefined,
	newsLoading: boolean,
	newsError: Error | undefined,	
}
