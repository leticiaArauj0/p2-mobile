import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App;
