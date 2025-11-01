import type { Dispatch } from "react"
import styled from "styled-components";
import { SpinnerDiamond } from "spinners-react";

import type { Action, State } from "../state"
import { Issue } from "../components";

export const IssueContainer = styled.div`
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


type IssueDispatchProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const IssueWidget = ({ state }: IssueDispatchProps) => {
  return state.issuesLoading 
		? <SpinnerDiamond /> 
		: state.issuesError 
		? <em>{state.issuesError?.message}</em> 
		: (
			<IssueContainer>
				{state.issues?.slice(0,3)?.map(issue => <Issue issue={issue} />)}
			</IssueContainer>
		);
};
