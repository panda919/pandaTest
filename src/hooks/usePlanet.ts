import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { FETCH_ALL_PLANET_ID } from '@modules/planet/graphql';
import _ from 'lodash';

export const usePlanet = () => {
  const { data } = useQuery(FETCH_ALL_PLANET_ID, {
    fetchPolicy: 'cache-first',
  });
  const planetsIdList = useMemo(() => {
    if (!data) {
      return [];
    } else {
      return _.map(data?.allPlanets?.planets, item => item.id);
    }
  }, [data]);
  return planetsIdList as string[];
};
