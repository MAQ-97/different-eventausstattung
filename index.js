/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import App from './src/screens/index';
import {name as appName} from './app.json';
import store from './src/store/';

const Wrapper = () => {
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => Wrapper);
