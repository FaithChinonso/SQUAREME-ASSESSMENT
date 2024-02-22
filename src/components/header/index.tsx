import {SvgIcon} from '@components/svg-icon';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './styles';

const Header = ({navigation, title, children}) => {
  return (
    <SafeAreaView style={styles.pageWrap}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.scrollWrap}>
        <View style={styles.flex}>
          <SvgIcon
            name="back"
            size={24}
            containerStyle={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Header;
