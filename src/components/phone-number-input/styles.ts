import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: HDP(10),
    flex: 1,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: HDP(8),
    borderWidth: HDP(1),
    borderColor: palette.gray,
    padding: HDP(14),
    borderRadius: HDP(8),
  },
  selectView: {
    borderRadius: HDP(100),
    paddingVertical: HDP(0),

    paddingHorizontal: HDP(0),
    borderWidth: 0,
  },
  selectText: {
    fontSize: RF(12),
    color: '#979797',
    fontFamily: family.Regular,
  },
  selectedText: {
    fontSize: RF(10),
    color: '#979797',
    fontFamily: family.Regular,
  },
  selectDropdown: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    borderRadius: HDP(24),
    marginBottom: HDP(10),
    overflow: 'hidden',
  },
  textInput: {
    borderWidth: HDP(1),
    borderColor: palette.gray,
    padding: HDP(14),
    borderRadius: HDP(8),
    flex: 1,
  },
});
export default style;
