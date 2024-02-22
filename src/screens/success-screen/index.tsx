import {SizedBox, SvgIcon} from '@components';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './styles';

export const SuccessScreen: FC = ({route}: any) => {
  const title = route?.params?.title;
  const description = route?.params?.description;
  const routeFunction = route?.params?.routeFunction;
  return (
    <View style={style.container}>
      <SizedBox height={200} />
      <SvgIcon name="success" size={124} />
      <Text style={style.title}>{title}</Text>
      <SizedBox height={10} />
      <Text style={style.desc}>{description}</Text>
      <View style={style.bottomView}>
        <TouchableOpacity
          onPress={() => {
            routeFunction();
          }}
          style={style.button}>
          <Text style={style.flexNext}>Okay!</Text>
        </TouchableOpacity>
        <SizedBox height={16} />
      </View>
    </View>
  );
};
