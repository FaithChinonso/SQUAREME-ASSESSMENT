import {SvgIcon} from '@components';
import React, {FC, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import style from './styles';

export const SplashScreen: FC = ({navigation}: any) => {
  // Customize status bar appearance
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#ffffff');
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={style.container}>
      <Animatable.View animation="flash" direction="normal" duration={2000}>
        <Animatable.View animation="fadeIn" duration={2300}>
          <SvgIcon name="logo" size={200} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};
