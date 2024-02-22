import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
  },
  logo: {
    marginVertical: 'auto',
  },
  flex: {
    position: 'absolute',
    width: width * 0.9,
    alignSelf: 'center',
    bottom: HDP(30),
  },
  flexButtonn: {
    backgroundColor: palette.white,
    padding: HDP(14),
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
  },
  flexButton: {
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
    color: palette.black,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
  flexNextt: {
    color: palette.white,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
});

export default style;
