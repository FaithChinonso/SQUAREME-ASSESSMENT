import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height,

    alignItems: 'center',
    backgroundColor: palette.white,
  },

  title: {
    color: palette.black,
    fontSize: RF(16),
    fontFamily: family.Bold,
    width: width * 0.9,
    textAlign: 'center',
  },
  desc: {
    color: palette.greyText,
    fontSize: RF(13),
    fontFamily: family.Medium,
    width: width * 0.9,
    textAlign: 'center',
  },
  bottomView: {
    position: 'absolute',
    width: width * 0.9,
    alignSelf: 'center',
    bottom: HDP(50),
  },
  button: {
    backgroundColor: palette.primary,
    padding: HDP(14),
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
    borderWidth: HDP(1),
    borderColor: palette.white,
  },

  flexNext: {
    color: palette.white,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
});

export default style;
