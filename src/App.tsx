import React from 'react';

//redux
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from 'redux/store';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app.navigation';

//loading
import {LoadingNavigation} from './screens/LoadingScreen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingNavigation />} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
