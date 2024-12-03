import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'; // Ruta correcta a HomeScreen
import LoginScreen from './screens/LoginScreen'; // Ruta correcta a LoginScreen
import SignupScreen from './screens/SignupScreen'; // Ruta correcta a SignupScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Oculta la cabecera automática
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta la cabecera automática
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }} // Oculta la cabecera automática
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

