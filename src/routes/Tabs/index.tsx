/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import {NavMenu} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, WalletScreen} from '@screens';

import {Dimensions, View} from 'react-native';
const {width, height} = Dimensions.get('window');

const Tabs = createBottomTabNavigator();

export const TabsStackScreens = () => {
  return (
    <View
      style={{
        width,
        height: height,
      }}>
      <Tabs.Navigator
        tabBar={props => <NavMenu {...props} />}
        // @ts-ignore
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
        initialRouteName="Home">
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Wallet" component={WalletScreen} />
        <Tabs.Screen name="Profile" component={Home} />
      </Tabs.Navigator>
    </View>
  );
};
