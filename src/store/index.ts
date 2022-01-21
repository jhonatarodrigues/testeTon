import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native'

import rootReducer from './ducks/rootReducers';
import rootSaga from './ducks/rootSaga';


// -- types
import { ICartState } from './ducks/cart/types';

export interface ApplicationState {
  cart: ICartState
}

let sagaMonitor = {};
if (Reactotron && __DEV__ && Reactotron.createSagaMonitor) {
  sagaMonitor =  Reactotron.createSagaMonitor();
} 

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(
    sagaMiddleware
  ),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)

export default store;
