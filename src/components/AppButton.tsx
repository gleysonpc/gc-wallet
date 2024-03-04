import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { theme } from '../theme';

type AppButtonProps = {
  text: string;
  handlePress?: (event: GestureResponderEvent) => void;
  icon?: any;
};

export function AppButton({ text, handlePress, icon }: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
      {icon && <MaterialCommunityIcons name={icon} size={30} color={theme.colors.white} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    height: 44,
    borderRadius: 22,
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    paddingLeft: 32,
  },
});
