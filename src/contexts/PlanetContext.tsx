import React, { createContext, useContext } from 'react';

import { usePlanet } from '@hooks/usePlanet';

export type PlanetContextProps = {
  planetsIdList: string[];
};

export const PlanetContext = createContext<PlanetContextProps>({
  planetsIdList: [],
});

export function PlanetContextProvider({ children }: { children: React.ReactNode }) {
  const planetsIdList = usePlanet();

  return (
    <PlanetContext.Provider
      value={{
        planetsIdList,
      }}>
      {children}
    </PlanetContext.Provider>
  );
}
export const usePlanetContext = () => useContext(PlanetContext);
