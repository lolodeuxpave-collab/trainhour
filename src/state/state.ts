import type { Station } from "../types";

export type State = { 
	loading: boolean,
	stations: Station[] | undefined,
	error: Error | undefined,	
}


