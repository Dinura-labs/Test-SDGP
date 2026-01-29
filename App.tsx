import React, { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MultiSignupScreen from './src/screens/MultiSignupScreen';

export default function App() {
  const [showSignup, setShowSignup] = useState(false);

  if (showSignup) {
    return <MultiSignupScreen />;
  }

  return <WelcomeScreen onGetStarted={() => setShowSignup(true)} />;
}