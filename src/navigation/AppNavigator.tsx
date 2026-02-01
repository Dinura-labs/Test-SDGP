import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens Import
import WelcomeScreen from '../screens/WelcomeScreen';
import MultiSignupScreen from '../screens/MultiSignupScreen';
import TourScreen1 from '../screens/TourScreen1';
import TourScreen2 from '../screens/TourScreen2';
import TourScreen3 from '../screens/TourScreen3';
import TourScreen4 from '../screens/TourScreen4'; // Import TourScreen4
import TourScreen5 from '../screens/TourScreen5'; // Import TourScreen5

// Type Definitions
export type RootStackParamList = {
  Welcome: undefined;
  Signup: undefined;
  Tour1: undefined;
  Tour2: undefined;
  Tour3: undefined;
  Tour4: undefined; 
  Tour5: undefined; // Add Tour5 to type definition
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        
        {/* 1. Welcome Screen */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        {/* 2. Signup Screen */}
        <Stack.Screen name="Signup">
          {(props) => (
            <MultiSignupScreen 
              onSignupComplete={() => props.navigation.navigate('Tour1')} 
            />
          )}
        </Stack.Screen>

        {/* 3. Tour 01 */}
        <Stack.Screen name="Tour1">
          {(props) => (
            <TourScreen1 
              onNext={() => props.navigation.navigate('Tour2')} 
            />
          )}
        </Stack.Screen>

        {/* 4. Tour 02 */}
        <Stack.Screen name="Tour2">
          {(props) => (
            <TourScreen2 
              onNext={() => props.navigation.navigate('Tour3')} 
            />
          )}
        </Stack.Screen>

        {/* 5. Tour 03 -> Navigates to Tour 04 */}
        <Stack.Screen name="Tour3">
          {(props) => (
            <TourScreen3 
              onNext={() => props.navigation.navigate('Tour4')} 
            />
          )}
        </Stack.Screen>

        {/* 6. Tour 04 -> Navigates to Tour 05 */}
        <Stack.Screen name="Tour4">
          {(props) => (
            <TourScreen4 
              onNext={() => {
                console.log("Tour 04 Finished! Navigating to Tour 05");
                props.navigation.navigate('Tour5'); 
              }} 
            />
          )}
        </Stack.Screen>

        {/* 7. Tour 05 -> Navigates to Welcome (or Login) */}
        <Stack.Screen name="Tour5">
          {(props) => (
            <TourScreen5 
              onNext={() => {
                console.log("All Tours Finished!");
                props.navigation.navigate('Welcome'); 
              }} 
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}