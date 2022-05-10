import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

import WelcomeScreen from './screens/welcome'
// import MainMenu from './screens/mainMenu'
import MainStack from './Routes/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}