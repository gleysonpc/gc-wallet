import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ForgotPasswordScreen as ForgotPassword } from './Auth/ForgotPasswordScreen';
import { SignInScreen } from './Auth/SignInScreen';
import { SignUpScreen } from './Auth/SignUpScreen';
import { TabsNavigation } from './TabsNavigation';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Tabs: undefined;
  // Profile: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Tabs" component={TabsNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
