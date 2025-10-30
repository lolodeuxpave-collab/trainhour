import type { Dispatch } from "react"
import type { Action, State } from "../state"
import styled from "styled-components";
import { WiStrongWind, WiRaindrops, WiThermometer } from "react-icons/wi";
import {accentColor} from "../styles";


export const WeatherContainer = styled.div`
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


const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 64px;
    height: 64px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
`;

const WeatherDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
	font-size: 4rm;

  .weather-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;

    svg {
      font-size: 2rem;
      color: ${accentColor};
    }

    span {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

type WeatherDispatchProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const WeatherWidget = ({ state }: WeatherDispatchProps) => {
  const weather = state.weather?.current;
  if (!weather) return null;

  return (
    <WeatherContainer>
      <WeatherHeader>
        <img src={weather.condition.icon} alt={weather.condition.text} />
        <h2>{weather.condition.text}</h2>
      </WeatherHeader>

      <WeatherDetails>
        <div className="weather-item">
          <WiThermometer />
          <span>{weather.temp_c}°C</span>
        </div>
        <div className="weather-item">
          <WiRaindrops />
          <span>{weather.precip_mm} mm</span>
        </div>
        <div className="weather-item">
          <WiStrongWind />
          <span>{weather.gust_kph} kph</span>
        </div>
      </WeatherDetails>
    </WeatherContainer>
  );
};
