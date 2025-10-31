import { useEffect, useState } from "react";

import styled from "styled-components";


export const TimeStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #0b0c10;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);

  font-size: 4rem;
  font-weight: 200;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
	justify-content: center;
	padding-right: 1em;
	width: 40vh;
`;

export const NowTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("fr-FR"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("fr-FR"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <TimeStyled>{time}</TimeStyled>;
};

