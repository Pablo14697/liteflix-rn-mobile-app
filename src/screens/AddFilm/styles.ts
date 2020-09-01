// REACT
import { SafeAreaView } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const Container = styled(SafeAreaView)({
  backgroundColor: theme.colors.black,
  flex: 1,
});
