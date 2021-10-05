/**
 * @format
 */

import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import { CenterBox } from '@utils/StyledComponents';
import { Container, Content } from '@components';
import { useApolloClient } from '@apollo/client';
import RNShake from 'react-native-shake';
import styled from 'styled-components/native';
import { usePlanetContext } from '@contexts/PlanetContext';
// utils
import { PlanetType } from '@models/planet';
import { FETCH_PLANET_BY_ID } from '@modules/planet/graphql';

//= ======Query ====================
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const PlanetTitle = styled.Text`
  font-size: 25px;
`;
const FilmView = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;
const FilmTitle = styled.Text`
  font-size: 12px;
`;
const Home = (): ReactElement => {
  const { planetsIdList } = usePlanetContext();
  const [activePlanetId, setActivePlanetId] = useState<string | null>(null);
  const [planetData, setPlanetData] = useState<PlanetType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const client = useApolloClient();
  const onShake = useCallback(() => {
    const limit = planetsIdList.length;
    if (limit > 0) {
      const activeIndex = getRandomInt(0, limit);
      setActivePlanetId(planetsIdList[activeIndex]);
    }
  }, [planetsIdList]);

  useEffect(() => {
    const subscription = RNShake.addListener(onShake);
    return () => subscription.remove();
  });

  useEffect(() => {
    if (planetsIdList.length > 0) {
      setActivePlanetId(planetsIdList[0]);
    }
    return () => {};
  }, [planetsIdList]);

  useEffect(() => {
    const fetchPlanetByID = async (id: string) => {
      try {
        setIsLoading(true);
        const { data: planet } = await client.query({
          query: FETCH_PLANET_BY_ID,
          variables: { id },
        });
        setPlanetData(planet?.planet);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    if (activePlanetId) {
      fetchPlanetByID(activePlanetId);
    }

    return () => {};
  }, [activePlanetId, client]);

  if (!planetData) {
    return (
      <Container>
        <Content>
          <CenterBox full={true} />
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.contentContainerStyle} style={styles.contentView}>
        <CenterBox full={true}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <>
              <PlanetTitle>{planetData?.name}</PlanetTitle>
              <FilmView>
                {planetData.filmConnection.films.length === 0 ? (
                  <FilmTitle>there is no any films. </FilmTitle>
                ) : (
                  _.map(planetData.filmConnection.films, film => {
                    return <FilmTitle key={film.id}>{film?.title}, </FilmTitle>;
                  })
                )}
              </FilmView>
            </>
          )}
        </CenterBox>
      </Content>
    </Container>
  );
};

export default Home;
const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  contentView: {
    width: '100%',
    justifyContent: 'center',
  },
});
