import { type State } from "./state";

export const initialState: State = {
	departures: undefined,
	trainScheduleError: undefined,
	trainScheduleLoading: false,
	news: undefined,
	newsError: undefined,
	newsLoading: false,
	weather: undefined,
	weatherError: undefined,
	weatherLoading: false,
	issues: undefined,
	issuesError: undefined,
	issuesLoading: false,
	stations: undefined,
	selectedLocation: 'Nivelles'
};
