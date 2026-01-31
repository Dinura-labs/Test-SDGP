import './src/global.css';
import React, { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MultiSignupScreen from './src/screens/MultiSignupScreen';
import TourScreen1 from './src/screens/TourScreen1'; // New Import

export default function App() {
  // We use a string state to handle more screens easily
  const [currentScreen, setCurrentScreen] = useState('welcome');

  if (currentScreen === 'signup') {
    return (
      <MultiSignupScreen
        onSignupComplete={() => setCurrentScreen('tour1')}
      />
    );
  }

  if (currentScreen === 'tour1') {
    return (
      <TourScreen1
        onNext={() => console.log('Going to next tour screen...')}
      />
    );
  }

  return (
    <WelcomeScreen
      onGetStarted={() => setCurrentScreen('signup')}
    />
  );
}