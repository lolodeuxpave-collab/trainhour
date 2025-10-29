export type Station = {
 "@id": string,
	id: string,
	name: string,
	locationX: string,
	locationY: string,
	standardname: string,
};

export type Data = {
	version: string,
	timestamp: string,
	station: Station[],
}
