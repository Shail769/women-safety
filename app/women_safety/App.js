/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/components/Home';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Home/>      
    </>
  );
};


export default App;
