import { FilmFragment } from './../film/fragment';

export const PlanetFragment = `
    fragment Planet on Planet  {
      id
      name
      filmConnection {
        films {
          ...Film
        }
      }
    }
    ${FilmFragment}
`;
