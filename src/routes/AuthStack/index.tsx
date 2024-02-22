import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ConfirmPIN,
  SetSecurityPin,
  SignUp,
  SuccessScreen,
  VerifyPhone,
  WelcomeScreen,
} from '@screens';

import React from 'react';

const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      {/* <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="VerifyPhone"
        component={VerifyPhone}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SetPin"
        component={SetSecurityPin}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ConfirmPIN"
        component={ConfirmPIN}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
