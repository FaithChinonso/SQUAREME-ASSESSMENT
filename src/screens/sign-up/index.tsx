/* eslint-disable @typescript-eslint/no-unused-vars */
import {SizedBox, SvgIcon} from '@components';
import Header from '@components/header';
import {PhoneNumberInput} from '@components/phone-number-input';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const SignUp = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  return (
    <>
      <Header navigation={navigation} title="Enter Your Phone Number">
        <SizedBox height={24} />
        <Text style={styles.text}>
          We’ll send an SMS with a code to verify your phone number
        </Text>
        <SizedBox height={36} />
        <PhoneNumberInput
          placeholder="Phone Number"
          onChangeText={value => {
            setPhoneNumber(value);
          }}
          value={phoneNumber}
          keyboardType="phone-pad"
          onSelect={val => setCode(val)}
          data={[{key: '+234', value: '+234'}]}
          defaultOption={{key: '+234', value: '+234'}}
        />
        <SizedBox height={24} />
        <TouchableOpacity style={styles.refer}>
          <Text style={styles.referText}>Have a referral ID?</Text>
          <SvgIcon name="refer" size={24} />
        </TouchableOpacity>
      </Header>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VerifyPhone');
          }}
          style={styles.button}>
          <Text style={styles.flexNext}>Proceed</Text>
        </TouchableOpacity>
        <SizedBox height={16} />
        <TouchableOpacity>
          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Text style={styles.highlight}>Login here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
