import type {Station} from "../types";
import type { Article } from "../types/article";
import type {IssuesResponse} from "../types/issues";
import type { DepartureType } from "../types/liveboard";
import type { WeatherData } from "../types/weather";

export type RSS = {
	title: string, 
	link: string
}

export type Config = {
	trainScheduleShow: number,
	trainDelayCompute: number,
	trainCancelCompute: number,
	rssFollow: string,
}

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

	issues: IssuesResponse | undefined,
	issuesLoading: boolean,
	issuesError: Error | undefined,

	stations: undefined | Station[],
	selectedLocation: string,
	config: Config,

	rss: RSS[] | undefined,
	rssLoading: boolean,
	rssError: Error | undefined,

}
