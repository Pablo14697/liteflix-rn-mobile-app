// REACT
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const BurgerMenuButton = styled(TouchableOpacity)({});

export const CircleContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.colors.electricViolet,
  borderRadius: 20,
  height: 40,
  justifyContent: 'center',
  marginRight: 10,
  width: 40,
});

export const DrawerContainer = styled(SafeAreaView)({
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const HeaderContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '70%',
});

export const NativeStyles = {
  drawer: { width: '75%' },
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
  scrollView: { paddingLeft: 20, width: '100%' },
};

export const NameContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.colors.mineShaft,
  borderRadius: 30,
  flexDirection: 'row',
  height: 55,
  paddingHorizontal: 10,
  paddingRight: '20%',
  marginRight: '5%',
});
