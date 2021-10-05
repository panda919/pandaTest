import { gql } from '@apollo/client';

import { PlanetFragment } from './fragment';
export const FETCH_ALL_PLANET_ID_Query = `
  query allPlanets {
    planets {
      id
    }
    totalCount
  }
`;
export const FETCH_ALL_PLANET_ID = gql`
  query root {
    allPlanets {
      planets {
        id
      }
      totalCount
    }
  }
`;
export const FETCH_PLANET_BY_ID = gql`
  query planet($id: ID!) {
    planet(id: $id) {
      ...Planet
    }
  }
  ${PlanetFragment}
`;
