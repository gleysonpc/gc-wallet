import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTexInput';
import { RootStackParamList } from '../Navigation';

type ForgotPasswordScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;
};

export function ForgotPasswordScreen({ navigation: { navigate } }: ForgotPasswordScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Forgot Password</Text>
      </View>
      <View style={styles.formBody}>
        <AppTextInput placeHolder="E-mail" />
        <AppButton text="Reset Password" icon="chevron-right" />
      </View>
      <View style={styles.formFooter}>
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
