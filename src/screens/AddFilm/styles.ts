// REACT
import { View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const Container = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  flex: 1,
  justifyContent: 'center',
});
