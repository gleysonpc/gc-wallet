import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../StackNavigation';
import { TabStackParamList } from '../TabsNavigation';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabStackParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  function handlePress() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <StatusBar style="auto" />
      <Button title="Logout" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
