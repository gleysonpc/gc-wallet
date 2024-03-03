import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../Navigation';

type AuthScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function AuthScreen({ navigation }: AuthScreenProps) {
  function handlePress() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text>Auth</Text>
      <StatusBar style="auto" />
      <Button title="Login" onPress={handlePress} />
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
