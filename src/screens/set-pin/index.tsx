/* eslint-disable react-native/no-inline-styles */

import {SizedBox} from '@components';
import Header from '@components/header';
import {HDP} from '@helpers';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const SetSecurityPin = ({navigation}) => {
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length > 5) {
      navigation.navigate('ConfirmPIN');
    }
  }, [navigation, pin]);

  return (
    <>
      <Header navigation={navigation} title="Set Your Security PIN">
        <SizedBox height={24} />
        <Text style={styles.text}>
          Set a six digit PIN that you would use for all transactions
        </Text>
        <SizedBox height={36} />
        <View
          style={{
            width: HDP(270),
            alignSelf: 'center',
            position: 'relative',
          }}>
          <Text style={styles.dash}>-</Text>
          <OTPInputView
            style={{width: HDP(270), height: HDP(100), alignSelf: 'center'}}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            secureTextEntry
            onCodeFilled={code => {
              setPin(code);
            }}
          />
        </View>
      </Header>
    </>
  );
};
