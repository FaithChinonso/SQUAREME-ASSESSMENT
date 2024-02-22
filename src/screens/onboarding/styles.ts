import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  pageWrap: {
    flex: 1,
    justifyContent: 'space-between',
    height,
    backgroundColor: palette.purple,
  },
  scrollWrap: {
    paddingHorizontal: HDP(24),
    justifyContent: 'space-between',
    position: 'absolute',
    left: HDP(0),
    top: HDP(0),
    zIndex: HDP(10),
    width,
    height,
  },
  container: {
    position: 'absolute',
    flex: 1,
    width: width * 0.9,
    alignSelf: 'center',
    bottom: 0,
  },

  swipeCont: {
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeLabel: {
    color: palette.white,
    fontSize: RF(24),
    fontFamily: family.Bold,
  },
  swipeDesc: {
    color: palette.white,
    fontFamily: family.Regular,
    fontSize: RF(14),
  },
  swipeTextContainer: {width: width * 0.9},

  indicator: {
    height: HDP(10),
    width: HDP(10),
    backgroundColor: '#D9D9D9',
    marginHorizontal: 3,
    borderRadius: 10,
  },
  flowContainer: {
    width: width * 0.9,

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: HDP(24),
    position: 'absolute',
    bottom: HDP(40),
  },

  ctaGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,

    marginTop: HDP(16),
  },
  skipText: {
    color: palette.black,
    fontFamily: family.Regular,
    fontSize: RF(14),
    textDecorationLine: 'underline',
  },
  indicate: {
    height: HDP(5),
    width: HDP(28),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderRadius: HDP(7),
  },
  unindicate: {
    height: HDP(5),
    width: HDP(28),
    backgroundColor: '#D9D9D980',
    justifyContent: 'center',
    borderRadius: HDP(7),
  },
  iconBg: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderRadius: HDP(1000),
    padding: HDP(4),
  },
  textSpan: {
    color: '#031522',
    fontFamily: family.Bold,
    fontSize: RF(14),
  },
  logo: {
    position: 'absolute',

    zIndex: 300,
    top: HDP(70),
    left: HDP(20),
  },
  image: {
    alignSelf: 'center',
    width,
    height,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: HDP(20),
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
  },
  flexSkip: {
    color: palette.white,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
  flexButton: {
    backgroundColor: palette.white,
    padding: HDP(14),
    width: HDP(108),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
  },
  flexButtonn: {
    backgroundColor: palette.white,
    padding: HDP(14),
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HDP(8),
  },
  flexNext: {
    color: palette.black,
    fontFamily: family.Medium,
    fontSize: RF(15),
  },
});

export default style;
