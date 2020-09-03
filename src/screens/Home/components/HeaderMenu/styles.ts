// REACT
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { hastNotch } from '../../../../utils/devices';

export const BurgerMenuButton = styled(TouchableOpacity)({});

export const HeaderContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginTop: hastNotch ? '7%' : 0,
  position: 'absolute',
  width: '90%',
});

export const Fill = styled(View)({
  flexDirection: 'row',
  height: 30,
  width: 40,
});

export const NativeStyles = StyleSheet.create({
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
});

export const OnImageContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 380,
  paddingRight: 20,
});
