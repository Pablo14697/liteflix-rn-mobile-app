// REACT
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const BurgerMenuButton = styled(TouchableOpacity)({});

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
