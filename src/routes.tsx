import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Preload from './pages/Preload';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Preload">
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
