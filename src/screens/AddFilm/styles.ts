// REACT
import { SafeAreaView, View, StyleSheet } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const Container = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const FieldContainer = styled(View)({ alignSelf: 'center', width: '85%' });

export const NativeStyles = StyleSheet.create({
  addFilm: { width: '45%' },
});
