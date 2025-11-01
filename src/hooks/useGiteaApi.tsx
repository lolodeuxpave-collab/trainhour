import { useEffect, type Dispatch } from "react";
import { actions, type Action, type State } from "../state";
import type {IssuesResponse} from "../types/issues";

const apiKey = 'a70bbe6b9f70747278ba3ec7a701b2b279be2efc';

export const useGiteaApi = ({ dispatch }: { state : State, dispatch: Dispatch<Action> }) => {
	const reloadIssues = (async () => {
		try {
			dispatch(actions.loadGiteaIssue({}));
			const answer = await fetch(`https://git.boomjacky.art/api/v1/repos/boomjacky/trainhour/issues?state=all`, {
				method: "GET",
				headers: {
					"Authorization": `token ${apiKey}`,
					"Accept": "application/json"
				}
			})
			const data = await answer.json() as IssuesResponse;
			dispatch(actions.loadGiteaIssueSuccess({ data }));
		} catch(error) {
			dispatch(actions.loadGiteaIssueError({ error: error as Error }));
		}
		
	})

	useEffect(() => {
		reloadIssues();
	}, [])

	return { reloadIssues }
}
