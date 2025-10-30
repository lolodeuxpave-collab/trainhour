import styled from "styled-components";

export const DepartureStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #0b0c10;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-family: "Inter", sans-serif;
`;

export const TimeStyled = styled.div`
  font-size: 2rem;
  font-weight: 200;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
	padding-right: 1em;
`;

export const InfoStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
	padding-right: 1em;
`;

export const DestinationStyled = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const DelayStyled = styled.div`
  font-size: 1rem;
  color: #ff4444;
	margin-right: 8px;
`;

export const PlatformStyled = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

