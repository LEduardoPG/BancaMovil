import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'; // Ruta correcta a HomeScreen
import LoginScreen from './screens/LoginScreen'; // Ruta correcta a LoginScreen
import SignupScreen from './screens/SignupScreen'; // Ruta correcta a SignupScreen
import DashboardScreen from './screens/DashboardScreen'; // Nueva pantalla
import MoneyScreen from './screens/MoneyScreen'; // Importa la pantalla de dinero
import TransferScreen from './screens/TransferScreen';
import ReceiveMoneyScreen from './screens/ReceiveMoneyScreen';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';
import NotificationsScreen from './screens/NotificationsScreen';
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
        <Stack.Screen
         name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="Money"
          component={MoneyScreen}
          options={{ headerShown: false }} // Oculta la cabecera automática
        />
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{ headerShown: false }} // Oculta la cabecera automática
        />
        <Stack.Screen
          name="ReceiveMoney"
          component={ReceiveMoneyScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
            name="Transactions"
            component={TransactionHistoryScreen}
            options={{ headerShown: false }}
        />
          <Stack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

