/* eslint-disable @typescript-eslint/no-unused-vars */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsStackScreens} from '@routes/Tabs';

import React from 'react';
import {StatusBar} from 'react-native';

const AppStack = createNativeStackNavigator();
const AppStackScreens = ({navigation}) => {
  // Customize status bar appearance
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#ffffff');
  return (
    <AppStack.Navigator initialRouteName={'AppHome'}>
      <AppStack.Screen
        name="AppHome"
        component={TabsStackScreens}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
