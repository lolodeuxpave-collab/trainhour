import type { Article } from "../types/article";
import type { DepartureType } from "../types/liveboard";
import type { WeatherData } from "../types/weather";

export type State = { 
	trainScheduleLoading: boolean,
	departures: DepartureType[] | undefined,
	trainScheduleError: Error | undefined,	

	weather: WeatherData | undefined,
	weatherLoading: boolean,
	weatherError: Error | undefined,	

	news: Article[] | undefined,
	newsLoading: boolean,
	newsError: Error | undefined,	
}
