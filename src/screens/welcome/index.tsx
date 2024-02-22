import {SizedBox, SvgIcon} from '@components';
import React, {FC} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import style from './styles';

export const WelcomeScreen: FC = ({navigation}: any) => {
  // Customize status bar appearance
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#ffffff');
  return (
    <View style={style.container}>
      <SvgIcon name="logo" size={200} style={style.logo} />
      <View style={style.flex}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={style.flexButtonn}>
          <Text style={style.flexNext}>Create an account</Text>
        </TouchableOpacity>
        <SizedBox height={24} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={style.flexButton}>
          <Text style={style.flexNextt}>I have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
