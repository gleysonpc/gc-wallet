import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import appIcon from '../../../assets/app_icon.png';
import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTexInput';
import { RootStackParamList } from '../StackNavigation';

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

export function SignUpScreen({ navigation: { navigate } }: SignUpScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={appIcon} style={styles.logoImg} />
        <Text style={styles.logoText}>Sign Up</Text>
      </View>
      <View style={styles.formBody}>
        <AppTextInput iconNane="" placeHolder="Name" />
        <AppTextInput placeHolder="E-mail" />
        <AppTextInput placeHolder="Password" />
        <AppTextInput placeHolder="Repeat password" />
        <AppButton text="Sign Up" icon="chevron-right" handlePress={() => navigate('Tabs')} />
      </View>
      <View style={styles.formFooter}>
        <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.linkRow}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate('SignIn')}>
            <Text style={styles.linkText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
