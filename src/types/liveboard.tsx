interface StationInfo {
  '@id': string;
  id: string;
  name: string;
  locationX: string;
  locationY: string;
  standardname: string;
}

interface VehicleInfo {
  name: string;
  shortname: string;
  number: string;
  type: string;
  locationX: string;
  locationY: string;
  '@id': string;
}

interface PlatformInfo {
  name: string;
  normal: string;
}
interface Occupancy {
  '@id': string;
  name: 'unknown' | 'low' | 'medium' | 'high';
}

export interface DepartureType {
  id: string;
  station: string;
  stationinfo: StationInfo;
  time: string; 
  delay: string; 
  canceled: '0' | '1';
  left: '0' | '1';
  isExtra: '0' | '1';
  vehicle: string;
  vehicleinfo: VehicleInfo;
  platform: string;
  platforminfo: PlatformInfo;
  occupancy: Occupancy;
  departureConnection: string;
}

interface Departures {
  number: string;
  departure: DepartureType[];
}

export interface LiveBoard {
  version: string;
  timestamp: string;
  station: string;
  stationinfo: StationInfo;
  departures: Departures;
}
