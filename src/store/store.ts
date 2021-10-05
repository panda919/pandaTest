import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, Persistor } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Reactotron from './ReactotronConfig';
import { LoginStateType } from '@modules/auth/slice';
export type StateType = {
  login: LoginStateType;
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // timeout: 0,
  version: 1,
};
const sagaMonitor = Reactotron.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const devMode = process.env.NODE_ENV === 'development';

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
    immutableCheck: {
      warnAfter: 600,
    },
  }),
  sagaMiddleware,
  thunk,
];
const enhancers = [];
if (devMode) {
  enhancers.push(Reactotron.createEnhancer!());
}
const store = configureStore({
  reducer: persistedReducer,
  devTools: devMode,
  middleware,
  enhancers,
});
sagaMiddleware.run(rootSaga);
const persister: Persistor = persistStore(store);
export function getPersister(): Persistor {
  return persister;
}
export { store, persister };
