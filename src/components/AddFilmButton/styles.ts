// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

// @ts-ignore
export const AddMovieButton = styled.TouchableOpacity(({ height }: { height: any }) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.red,
  borderRadius: 30,
  flexDirection: 'row',
  height,
  justifyContent: 'center',
  marginHorizontal: 25,
  marginVertical: '5%',
}));
