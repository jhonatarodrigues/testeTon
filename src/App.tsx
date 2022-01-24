import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store, { persistor } from './store/';
import Routes from '~/Routes';
import '~/configs/reactotronConfig';

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
