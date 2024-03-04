import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import { theme } from '../theme';

type AppTextInputProps = {
  iconNane: any;
  placeHolder?: string;
};

export function AppTextInput({ iconNane, placeHolder }: AppTextInputProps) {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={iconNane} size={30} color={theme.colors.gray} />
      <TextInput style={styles.inputText} placeholder={placeHolder} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: 3,
    marginBottom: 20,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    height: 32,
    marginLeft: 5,
  },
});
