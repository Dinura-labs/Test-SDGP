import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import MultiSignupScreen from '../screens/MultiSignupScreen';
import TourScreen1 from '../screens/TourScreen1';
import TourScreen2 from '../screens/TourScreen2';
import TourScreen3 from '../screens/TourScreen3';
import TourScreen4 from '../screens/TourScreen4';
import TourScreen5 from '../screens/TourScreen5';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Signup: undefined;
  Tour1: undefined;
  Tour2: undefined;
  Tour3: undefined;
  Tour4: undefined;
  Tour5: undefined;
  Home: undefined;
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
        <Stack.Screen name="Tour4" component={TourScreen4} />
        <Stack.Screen name="Tour5" component={TourScreen5} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
