import { useEffect, useState, type Dispatch } from "react"
import type { Action, State } from "../state"

import { NewsArticle } from "../components"
import {SpinnerDiamond} from "spinners-react"
import Pager from "../components/Pager";

const pageSpeed = 10000;
const perPage = 2;

type NewsDispatchProps = {
	state: State,
	dispatch: Dispatch<Action>
}


export const NewsWidget = ({ state }: NewsDispatchProps ) => {
	const [newsCurrentPage, setNewsCurrentPage] = useState(1);
	const numberOfPages = Math.floor((state.news?.length || 1) / perPage)
	useEffect( () => {
		const id = setInterval(() => {
			if(newsCurrentPage === numberOfPages) {
				setNewsCurrentPage(1)
			} else {
				setNewsCurrentPage(newsCurrentPage + 1)
			}
		}, pageSpeed);
		return () => clearInterval(id)
	}, [newsCurrentPage, state])

	return <div>
		{state.newsLoading 
			? <SpinnerDiamond />
		  : state.newsError  
	 	  ?  <em>{state.newsError?.message}</em>
		  : <>
				<Pager 
					currentPage={newsCurrentPage} 
					total={numberOfPages} 
					onChange={setNewsCurrentPage}
				/>
				{state.news?.slice((newsCurrentPage - 1) * perPage, newsCurrentPage * perPage)
					.map(article => <NewsArticle {...{article}} />)}
			</>}
		</div>
}
