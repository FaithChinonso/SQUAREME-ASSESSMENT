/* eslint-disable react-native/no-inline-styles */

import {SizedBox} from '@components';
import Header from '@components/header';
import {HDP} from '@helpers';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const VerifyPhone = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [seconds, setSeconds] = useState(60);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);
  useEffect(() => {
    if (pin.length > 4) {
      navigation.navigate('SuccessScreen', {
        title: 'Verification successful!',
        description: 'Your phone number has been verified successfully.',
        routeFunction: () => navigation.navigate('SetPin'),
      });
    }
  }, [navigation, pin]);

  return (
    <>
      <Header navigation={navigation} title="Verify Phone Number">
        <SizedBox height={24} />
        <Text style={styles.text}>
          Please input the five digit code that was sent to your phone number
          below
        </Text>
        <SizedBox height={36} />
        <OTPInputView
          style={{width: '60%', height: HDP(100), alignSelf: 'center'}}
          pinCount={5}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          secureTextEntry
          onCodeFilled={code => {
            setPin(code);
          }}
        />
        <SizedBox height={16} />
        <Text style={styles.resendSpan}>0 : {formattedSeconds}</Text>
        <SizedBox height={24} />
        <TouchableOpacity
          onPress={() => {
            setSeconds(60);
          }}>
          <Text style={styles.bottomText}>
            Having trouble receiving SMS? {''}
            <Text style={styles.highlight}>Resend</Text>
            {''} Or try other options below
          </Text>
        </TouchableOpacity>
      </Header>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verify');
          }}
          disabled={seconds !== 0}
          style={[seconds !== 0 ? styles.disabledButtonn : styles.buttonn]}>
          <Text style={[seconds !== 0 ? styles.flexNextted : styles.flexNextt]}>
            Call me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verify');
          }}
          disabled={seconds !== 0}
          style={[seconds !== 0 ? styles.disabledButton : styles.button]}>
          <Text style={[styles.flexNext]}>Whatsapp</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
