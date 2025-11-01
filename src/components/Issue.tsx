import type { IssueType } from "../types/issues"

import styled from 'styled-components';
import {TitleLink} from "./NewsArticle";


export const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;


export const Issue = ({ issue }: { issue: IssueType }) => {
  return (
    <IssueHeader>
			<a href={`https://git.boomjacky.art/boomjacky/trainhour/issues/${issue.id}`}>
				<TitleLink>
					{issue.title}

				</TitleLink>
			</a>
    </IssueHeader>
  );
};
