import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps,
  useColorScheme,
} from 'react-native';
import {Colors} from '../constants/colors';

type IProps = {
  bold?: boolean;
} & TextProps;

export const Text = ({style, children, bold, ...rest}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <RNText
      style={[
        styles.text,
        bold && styles.bold,
        isDarkMode ? styles.lightText : styles.darkText,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: '600',
  },
  darkText: {
    color: `${Colors.black}DD`,
  },
  lightText: {
    color: `${Colors.white}DD`,
  },
});
