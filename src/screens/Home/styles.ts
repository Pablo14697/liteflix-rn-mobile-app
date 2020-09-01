// REACT
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

export const BurgerMenuButton = styled(TouchableOpacity)({});

export const Container = styled(SafeAreaView)({
  flex: 1,
});

export const Content = styled(View)({
  flex: 1,
  width: '100%',
});

export const HeaderContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginTop: '3%',
  width: '90%',
});

export const Fill = styled(View)({
  flexDirection: 'row',
  height: 30,
  width: 40,
});

export const NativeStyles = {
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
};
