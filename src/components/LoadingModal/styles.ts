// LIBS
import styled from 'styled-components/native';

// REACT NATIVE
import { StyleSheet, View } from 'react-native';

// UTILS
import { theme } from '../../utils';

export const LoadingModalContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.colors.opacity50Black,
  flex: 1,
  justifyContent: 'center',
  width: '100%',
});

export const NativeStyles = StyleSheet.create({
  loadingDots: {
    height: 100,
    width: 100,
  },
});
