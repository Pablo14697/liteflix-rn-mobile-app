import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import { theme } from '../../utils';

export const DrawerContainer = styled(SafeAreaView)({
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const NativeStyles = {
  scrollView: { paddingLeft: 20, width: '100%' },
};
