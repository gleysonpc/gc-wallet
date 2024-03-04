import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import appIcon from '../../../assets/app_icon.png';
import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTexInput';
import { RootStackParamList } from '../StackNavigation';

type SignInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
};

export function SignInScreen({ navigation: { navigate } }: SignInScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={appIcon} style={styles.logoImg} />
        <Text style={styles.logoText}>Sign In</Text>
      </View>
      <View style={styles.formBody}>
        <AppTextInput iconNane="email-outline" placeHolder="E-mail" />
        <AppTextInput iconNane="lock-outline" placeHolder="Password" />
        <AppButton text="Sign In" icon="chevron-right" handlePress={() => navigate('Tabs')} />
      </View>
      <View style={styles.formFooter}>
        <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.linkRow}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text style={styles.linkText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
