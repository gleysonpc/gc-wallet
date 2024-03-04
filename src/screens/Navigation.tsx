import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { ForgotPasswordScreen as ForgotPassword } from './Auth/ForgotPasswordScreen';
import { SignInScreen } from './Auth/SignInScreen';
import { SignUpScreen } from './Auth/SignUpScreen';
import { HomeScreen } from './Home';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  ForgotPassword: undefined;
  // Profile: { userId: string };
};

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: '', headerBackTitle: 'Back' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
