import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  scrollWrap: {
    paddingHorizontal: HDP(24),
    justifyContent: 'space-between',
    position: 'absolute',
    left: HDP(0),
    top: HDP(0),
    zIndex: HDP(10),
    width,
    height: height * 0.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: HDP(24),
    alignItems: 'center',
    zIndex: HDP(12),
  },
  row: {
    flexDirection: 'row',
    gap: HDP(10),
  },
  rowHello: {
    fontSize: RF(12),
    color: '#828282',
    zIndex: HDP(12),
  },
  rowName: {
    fontSize: RF(12),
    color: '#0C0C26',
    zIndex: HDP(12),
  },
  icon: {
    width: HDP(32),
    height: HDP(32),
    borderRadius: HDP(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
  wallet: {
    fontSize: RF(12),
    color: '#000A4A',
    textAlign: 'center',
  },
  amount: {
    fontSize: RF(32),
    color: palette.primary,
    textAlign: 'center',
    fontFamily: family.Bold,
  },
  naira: {
    fontSize: RF(12),
    color: '#0C0C26',
    textAlign: 'center',
    marginTop: HDP(12),
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
    backgroundColor: '#E1E1E1',
    padding: HDP(14),
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
    borderWidth: HDP(1),
    borderColor: '#E1E1E1',
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
    color: '#747474',
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
  subHead: {
    color: '#656565',
    fontFamily: family.Medium,
    fontSize: RF(16),
    marginLeft: HDP(16),
  },
  swipeCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: HDP(24),
  },
  iconn: {
    width: HDP(40),
    height: HDP(40),
    borderRadius: HDP(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6EFFB',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: HDP(24),
  },
  title: {
    color: '#4F4F4F',
    fontFamily: family.Medium,
    fontSize: RF(17),
    textAlign: 'center',
  },
  desc: {
    color: '#9A9A9A',
    fontFamily: family.Medium,
    fontSize: RF(12),
    textAlign: 'center',
  },
});

export default styles;
