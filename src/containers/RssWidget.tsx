import type { Dispatch } from "react"
import type { Action, State } from "../state"
import styled from "styled-components";
import {accentColor} from "../styles";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: #0b0c10;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); 
  font-family: "Inter", sans-serif;
  max-width: 600px; 
  margin: 1rem auto; 
`;


export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const TitleLink = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${accentColor}; 
  text-decoration: none;
  margin-right: 1rem;
`;

const RssArticle = (article: {title: string, link: string}) => {

	return <NewsContainer>
		<NewsHeader>{article.title}</NewsHeader>
		<a href={article.link}>Read more</a>
	</NewsContainer>
}
  
export const RssWidget = ({ state }: { state: State, dispatch: Dispatch<Action> }) => {

	return <>
		{state.rss?.map(rss => <RssArticle {...rss} />)}
	</>
}
