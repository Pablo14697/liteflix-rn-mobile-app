// REACT
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const BadgeDot = styled(View)({
  backgroundColor: theme.colors.red,
  borderRadius: 5,
  height: 10,
  position: 'absolute',
  right: 2,
  top: 2,
  width: 10,
  zIndex: 1,
});

export const BellContainer = styled(View)({ marginRight: 10 });

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

export const Line = styled(View)({
  borderColor: theme.colors.opacity20White,
  borderWidth: 0.5,
  width: '90%',
});

export const LogOutButton = styled(TouchableOpacity)({ marginVertical: '5%' });

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
  marginBottom: 35,
  marginRight: '5%',
  paddingHorizontal: 10,
  paddingRight: '20%',
});

export const NewsOptionButton = styled(TouchableOpacity)({ marginVertical: 8 });

export const NewsTitle = styled(TouchableOpacity)({
  flexDirection: 'row',
  marginBottom: 5,
  marginTop: 15,
});

export const OptionContainer = styled(View)({ justifyContent: 'space-around', height: 45 });
