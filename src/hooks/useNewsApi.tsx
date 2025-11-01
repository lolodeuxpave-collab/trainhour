import { useEffect, type Dispatch } from "react"
import { actions, type Action, type State } from "../state"
import type {Article} from "../types/article"

const newsUrl = 'https://newsdata.io/api/1/latest?apikey=pub_26997f21bb174c7cbab59b3651533429&q=nivelle &country=be'

export type UseNewsApiProps = {
	dispatch: Dispatch<Action>,
	state: State
}

export const useNewsApi = ({dispatch}: UseNewsApiProps) => {
	const reloadNews = (async () => {
		try {
			dispatch(actions.loadNews({}));
			const answer = await fetch(newsUrl);
			const { results: news } = await answer.json() as { results: Article[] }
			dispatch(actions.loadNewsSuccess({ news }));
		} catch(error) {
			dispatch(actions.loadNewsError({ error: error as Error}));
		}
	})
	useEffect(() => {
		reloadNews()
	}, [])

	return { reloadNews } 
}
