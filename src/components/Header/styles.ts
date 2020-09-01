// REACT
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

export const ArrowBackButton = styled(TouchableOpacity)({
  height: 30,
  width: 40,
});

export const Fill = styled(View)({
  height: 30,
  width: 40,
});

export const HeaderContainer = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: '4%',
  width: '100%',
});

export const NativeStyles = StyleSheet.create({
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
});
