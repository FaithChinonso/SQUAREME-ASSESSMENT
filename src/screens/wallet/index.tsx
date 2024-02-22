/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SizedBox, SvgIcon} from '@components';
import React, {FC, useState} from 'react';
import {Dimensions, SafeAreaView, Text, TextInput, View} from 'react-native';

import {HDP} from '@helpers';
import styles from './styles';
const {width, height} = Dimensions.get('window');
export const WalletScreen: FC = ({navigation}: any) => {
  const [number, setNumber] = useState('0');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0C0C26',
        height,
        paddingHorizontal: HDP(24),
      }}>
      <View style={styles.flex}>
        <SvgIcon name="white-wallet" size={24} />
        <View style={styles.balance}>
          <Text style={styles.name}>Wallet Balance</Text>
          <Text style={styles.amount}> ₦ 5,200</Text>
        </View>
        <SvgIcon name="clock" size={24} />
      </View>
      <SizedBox height={70} />
      <View style={styles.view}>
        <Text style={styles.naira}>₦</Text>
        <TextInput
          value={number}
          onChangeText={val => {
            setNumber(val);
          }}
          keyboardType="numeric"
          style={styles.inputField}
        />
      </View>
    </SafeAreaView>
  );
};
