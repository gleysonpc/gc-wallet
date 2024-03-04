import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
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
    alignItems: 'center',
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
