/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text} from './components/Text';
import {Colors} from './constants/colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? `${Colors.teal}80` : `${Colors.teal}60`,
  };

  return (
    <SafeAreaView style={[styles.flex, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.flexGrow}
          contentInsetAdjustmentBehavior="automatic">
          <View style={[styles.flexGrow, styles.container]}>
            <Text bold>
              This is centered, wrapped text box. The whole app contents can be
              rendered here and safe view etc. is taken in to account
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default App;
