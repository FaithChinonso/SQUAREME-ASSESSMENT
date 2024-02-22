/* eslint-disable react-native/no-inline-styles */
import RootNavigator from '@routes';
import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigator />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
