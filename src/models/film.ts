export type FilmType = {
  id: string;
  title: String;
};
export type PlanetFilmsConnectionType = {
  totalCount: number;
  films: FilmType[];
};
