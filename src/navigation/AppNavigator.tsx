import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import MultiSignupScreen from '../screens/MultiSignupScreen';
import TourScreen1 from '../screens/TourScreen1';
import TourScreen2 from '../screens/TourScreen2';
import TourScreen3 from '../screens/TourScreen3';

export type RootStackParamList = {
  Welcome: undefined;
  Signup: undefined;
  Tour1: undefined;
  Tour2: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={MultiSignupScreen} />
        <Stack.Screen name="Tour1" component={TourScreen1} />
        <Stack.Screen name="Tour2" component={TourScreen2} />
        <Stack.Screen name="Tour3" component={TourScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
