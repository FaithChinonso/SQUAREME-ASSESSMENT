import {Platform} from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  Light: Platform.select({
    ios: 'DMSans-Light', // The font family name
    android: 'DMSans-Light', // The file name
  }),
  Bold: Platform.select({
    ios: 'DMSans-Bold', // The font family name
    android: 'DMSans-Bold', // The file name
  }),
  Regular: Platform.select({
    ios: 'DMSans-Regular', // The font family name
    android: 'DMSans-Regular', // The file name
  }),
  Medium: Platform.select({
    ios: 'DMSans-Medium', // The font family name
    android: 'DMSans-Medium', // The file name
  }),
  SemiBold: Platform.select({
    ios: 'DMSans-SemiBold', // The font family name
    android: 'DMSans-SemiBold', // The file name
  }),
};
