import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import appIcon from '../../../assets/app_icon.png';
import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTexInput';
import { theme } from '../../theme';
import { RootStackParamList } from '../Navigation';

type AuthScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function AuthScreen({ navigation }: AuthScreenProps) {
  function handlePress() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={appIcon} style={styles.logoImg} />
        <Text style={styles.logoText}>Sign In</Text>
      </View>
      <View style={styles.formBody}>
        <AppTextInput iconNane="email-outline" placeHolder="E-mail" />
        <AppTextInput iconNane="lock-outline" placeHolder="Password" />
        <AppButton text="Sign In" icon="chevron-right" handlePress={handlePress} />
      </View>
      <View style={styles.formFooter}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.linkRow}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImg: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 25,
    textAlign: 'center',
    color: theme.colors.textPrimary,
  },
  logoContainer: {
    marginTop: 50,
  },
  linkRow: {
    flexDirection: 'row',
  },
  formBody: {},
  footerText: {
    fontSize: 16,
    color: theme.colors.gray,
  },
  linkText: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formFooter: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
