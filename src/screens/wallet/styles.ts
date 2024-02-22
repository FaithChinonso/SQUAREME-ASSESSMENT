import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {StyleSheet} from 'react-native';
// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#0C0C26',
    position: 'relative',
    paddingHorizontal: HDP(24),
  },
  flex: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  balance: {
    backgroundColor: 'rgba(159, 86, 212, 0.1)',
    borderRadius: HDP(12),
    paddingHorizontal: HDP(24),
    paddingVertical: HDP(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: RF(12),
    color: 'rgba(189, 189, 189, 1)',
  },
  amount: {
    fontSize: RF(17),
    color: palette.white,
    fontFamily: family.Bold,
  },
  view: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  inputField: {
    fontSize: RF(64),

    color: palette.white,
  },
  naira: {
    fontSize: RF(36),

    color: palette.white,
  },
});
export default styles;
