// REACT
import { TextInput } from 'react-native';

// STYLES
import styled from 'styled-components';
import { theme } from '../../utils';

export const Input = styled(TextInput)({
  backgroundColor: theme.colors.mineShaft2,
  borderRadius: 4,
  height: 40,
  paddingHorizontal: 10,
});
