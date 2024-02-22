/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SizedBox, SvgIcon} from '@components';
import React, {FC} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
export const Home: FC = ({navigation}: any) => {
  // Customize status bar appearance
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#ffffff');
  const items = [
    {id: 1, name: 'Pay Bills', icon: 'pay-bills'},
    {id: 2, name: 'Giftcards', icon: 'refer'},
    {id: 3, name: 'Cards', icon: 'card'},
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradient
        colors={[
          'rgba(0, 198, 251, 0.2)',
          'rgba(0, 198, 251, 0.2)',
          'rgba(0, 198, 251, 0.00)',
        ]}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={style.scrollWrap}
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={style.container}>
        <View style={style.header}>
          <View style={style.row}>
            <SvgIcon name="avi" size={32} />
            <View>
              <Text style={style.rowHello}>Hello,</Text>
              <Text style={style.rowName}>David Oloye</Text>
            </View>
          </View>
          <View style={style.row}>
            <SvgIcon
              name="black-wallet"
              size={24}
              containerStyle={style.icon}
            />
            <SvgIcon name="bell" size={24} containerStyle={style.icon} />
          </View>
        </View>
        <SizedBox height={30} />
        <View style={{opacity: 0.5}}>
          <Text style={style.wallet}>Wallet Balance</Text>
          <SizedBox height={15} />
          <Text style={style.amount}>
            {' '}
            <Text style={style.naira}> ₦</Text>XXXXXX
          </Text>
        </View>
        <SizedBox height={40} />
        <View style={style.bottomView}>
          <TouchableOpacity style={style.button}>
            <Text style={[style.flexNext]}>Fund</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonn}>
            <Text style={style.flexNextt}>Withdraw</Text>
          </TouchableOpacity>
        </View>
        <SizedBox height={30} />
        <Text style={style.subHead}>Quick Access</Text>
        <SizedBox height={20} />
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()} // Specify a unique key for each item
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <View style={[style.swipeCont]}>
              <SvgIcon
                name={item?.icon}
                size={20}
                containerStyle={style.iconn}
              />
              <SizedBox height={20} />
              <Text>{item.name}</Text>
            </View>
          )}
        />

        <SizedBox height={30} />
        <Text style={style.subHead}>Recent Transactions</Text>
        <SizedBox height={30} />
        <View style={style.section}>
          <SvgIcon name="empty" size={64} />
          <SizedBox height={10} />
          <Text style={style.title}>No recent transaction</Text>
          <SizedBox height={10} />
          <Text style={style.desc}>
            You have not performed any transaction, you can start sending and
            requesting money from your contacts.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
