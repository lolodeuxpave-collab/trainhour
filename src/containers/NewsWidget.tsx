import type { Dispatch } from "react"
import type { Action, State } from "../state"

import { NewsArticle } from "../components"

type NewsDispatchProps = {
	state: State,
	dispatch: Dispatch<Action>
}
export const NewsWidget = ({ state }: NewsDispatchProps ) => {
	return <p>{state.news?.slice(0,2).map(article => <NewsArticle {...{article}} />)}</p>
}
