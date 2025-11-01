export interface StationsRoot {
  version: string
  timestamp: string
  station: Station[]
}

export interface Station {
  "@id": string
  id: string
  name: string
  locationX: string
  locationY: string
  standardname: string
}

