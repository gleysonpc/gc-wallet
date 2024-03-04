import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeScreen } from './Home';
import { ProfileScreen } from './Profile';
import { RootStackParamList } from './StackNavigation';

export type TabStackParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  Profile: NavigatorScreenParams<RootStackParamList>;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export function TabsNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={30} color={color} />,
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wrench" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
