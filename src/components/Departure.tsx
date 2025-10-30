import type { DepartureType } from "../types/liveboard"
import {
	DelayStyled, 
	DepartureStyled, 
	DestinationStyled, 
	InfoStyled, 
	PlatformStyled, 
	TimeStyled
} from './Departure.spec';


export const Departure = ({ departure }: { departure: DepartureType }) => {

	const date = new Date(parseInt(departure.time)*1000);

	const delayInt = Math.round(parseInt(departure.delay) / 60);
	const delay = delayInt > 0? `+${delayInt}`: ``
	const pad = (n:number) => n <= 9? `0${n}`: n;

	const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

	return <DepartureStyled>
		<TimeStyled>{timeStr}</TimeStyled>
		<DestinationStyled>{departure.station}</DestinationStyled>
		<DelayStyled>{departure.canceled === '1'? 'CANCELED': ''}</DelayStyled>
	 	<DelayStyled>{delay}</DelayStyled>
		<InfoStyled>{departure.left === '1'? "LEFT" : ""}</InfoStyled>
		<PlatformStyled>Platform: {departure.platform}</PlatformStyled>
	</DepartureStyled>
}
