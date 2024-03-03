import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    function handlePress() {
        navigation.navigate('Auth')
    }

    return (
        <View style={styles.container}>
            <Text>HOME</Text>
            <StatusBar style="auto" />
            <Button title='Logout' onPress={handlePress} />
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
