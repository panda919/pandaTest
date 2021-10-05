/**
 * @format
 */

import React from 'react';
import { store, persister } from '@store/store';
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient } from '@apollo/client';

import { PersistGate } from 'redux-persist/integration/react';

import { InMemoryCache } from '@apollo/client/cache';
import { PlanetContextProvider } from './contexts/PlanetContext';

import Home from './screens/HomeScreen';

const apolloClient = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
  cache: new InMemoryCache(),
  credentials: 'omit',
});

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <PersistGate loading={null} persistor={persister}>
          <PlanetContextProvider>
            <Home />
          </PlanetContextProvider>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
