import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: palette.grey,
    fontSize: RF(14),
    fontFamily: family.Medium,
    alignSelf: 'center',
    width: width * 0.8,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: HDP(16),
    backgroundColor: palette.white,
  },
  button: {
    backgroundColor: palette.primary,
    padding: HDP(14),
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
    borderWidth: HDP(1),
    borderColor: palette.white,
  },
  disabledButton: {
    backgroundColor: palette.lightGrey,
    padding: HDP(14),
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
    borderWidth: HDP(1),
    borderColor: palette.lightGrey,
  },
  buttonn: {
    backgroundColor: palette.white,
    padding: HDP(14),
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
    borderWidth: HDP(1),
    borderColor: palette.primary,
  },
  disabledButtonn: {
    backgroundColor: palette.white,
    padding: HDP(14),
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
    borderWidth: HDP(1),
    borderColor: palette.lightGrey,
  },

  flexNextted: {
    color: palette.lightText,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
  flexNext: {
    color: palette.white,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
  flexNextt: {
    color: palette.primary,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
  bottomText: {
    color: palette.grey,
    fontFamily: family.Medium,
    fontSize: RF(13),
    textAlign: 'center',
    width: width * 0.75,
    alignSelf: 'center',
  },
  highlight: {
    color: palette.purple,
  },
  underlineStyleBase: {
    backgroundColor: palette.offWhite,
    borderRadius: HDP(8),
    color: '#000',
    height: HDP(44),
    width: HDP(36),
  },
  resendSpan: {
    color: palette.purple,
    fontFamily: family.Medium,
    fontSize: RF(14),
    textAlign: 'center',
  },
});
export default styles;
