
import type {State} from "../state";
import {filterTrainHour} from "../containers";
import {mean} from "lodash";

import styled from "styled-components";
import { Clock, AlertTriangle, XCircle } from "lucide-react";
import {accentColor} from "../styles";

export const IndicatorStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #0b0c10;
  color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  font-family: 'Inter', sans-serif;
`;

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & svg {
    margin-bottom: 0.3em;
    color: ${accentColor};
  }

  .value {
    font-weight: 600;
    line-height: 1.1;
  }

  .label {
    font-size: 1em;
    opacity: 0.7;
    margin-top: 0.3em;
  }
`;

const formatTime = (seconds?: number) => {
  if (seconds == null || isNaN(seconds)) return "–";
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins}m ${secs}s`;
};

const formatPercent = (num?: number) => {
  if (num == null || isNaN(num)) return "–";
  return `${(num * 100).toFixed(1)}%`;
};

export const Indicator = ({ state }: { state: State }) => {
  const inOneHour = state.departures?.filter(filterTrainHour(60));
  const inThreeHour = state.departures?.filter(filterTrainHour(-60 * 3));

  const averageDelayGeneral = mean(inOneHour?.map(d => parseInt(d.delay)));
  const averageDelayedOnly = mean(
    inOneHour?.filter(d => parseInt(d.delay) !== 0)?.map(d => parseInt(d.delay))
  );

  const cancelled =
    (inThreeHour?.filter(d => d?.canceled === '1')?.length || 0) /
    (inThreeHour?.length || 1);

  return (
    <IndicatorStyled>
      <StatBlock>
        <Clock size={40} />
        <div className="value">{formatTime(averageDelayGeneral)}</div>
        <div className="label">Avg Delay (all)</div>
      </StatBlock>

      <StatBlock>
        <AlertTriangle size={40} />
        <div className="value">{formatTime(averageDelayedOnly)}</div>
        <div className="label">Avg Delay (delayed only)</div>
      </StatBlock>

      <StatBlock>
        <XCircle size={40} />
        <div className="value">{formatPercent(cancelled)}</div>
        <div className="label">Cancelled</div>
      </StatBlock>
    </IndicatorStyled>
  );
};

