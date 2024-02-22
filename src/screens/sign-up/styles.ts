import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: palette.grey,
    flexSize: RF(14),
    fontFamily: family.Medium,
    alignSelf: 'center',
    width: width * 0.6,
  },
  refer: {
    borderWidth: HDP(1),
    borderColor: palette.gray,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: HDP(14),
    borderRadius: HDP(8),
  },
  referText: {
    fontSize: RF(13),
    fontFamily: family.Medium,
    color: palette.purple,
  },
  bottomView: {
    width: width * 0.9,
    alignSelf: 'center',
    marginBottom: HDP(50),
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
  bottomText: {
    color: palette.grey,
    fontFamily: family.Medium,
    fontSize: RF(14),
    textAlign: 'center',
  },
  highlight: {
    color: palette.purple,
  },
});
export default styles;
