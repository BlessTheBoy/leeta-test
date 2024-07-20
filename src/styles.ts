import {StyleSheet} from 'react-native';
import {fontFamilies} from './shared/constants/fonts';

export const colors = {
  primary: '#FD671E',
  primaryBackground: '#F5F9FF',
  buttonColor: '#FF8A51',

  error: '#BA1A1A',
  text: {
    primary: '#0B0C1B',
  },
  grey: {
    200: '#EAECF0',
    400: '#98A2B3',
    500: '#667085',
    600: '#828282',
    900: '#454545',
  },
  white: '#FFFFFF',
  black: '#000000',
  pressed: '#f4f4f4',
};

export const textStyles = StyleSheet.create({
  body_default_medium: {
    fontFamily: fontFamilies.Inter.medium,
    fontSize: 15,
    lineHeight: 26,
  },
  body_small_medium: {
    fontFamily: fontFamilies.Inter.medium,
    fontSize: 13,
    lineHeight: 26,
  },
});
