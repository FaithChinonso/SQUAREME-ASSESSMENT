import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageWrap: {
    backgroundColor: '#FCFCFD',
    flex: 1,
  },
  scrollWrap: {
    paddingHorizontal: HDP(24),
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    left: HDP(0),
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  title: {
    fontSize: RF(18),
    color: palette.primary,
    fontFamily: family.Bold,
  },
});
export default styles;
