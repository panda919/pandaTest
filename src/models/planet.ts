import { PlanetFilmsConnectionType } from './film';

export type PlanetType = {
  id: string;
  name: String;
  filmConnection: PlanetFilmsConnectionType;
};
export type PlanetsConnectionType = {
  totalCount: number;
  planets: PlanetType[];
};
