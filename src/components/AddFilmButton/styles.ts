// REACT
import { TouchableOpacity } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

type FlexDirection = 'row' | 'column';

export const AddMovieButton = styled(TouchableOpacity)(
  ({ height }: { height: number | undefined }) => ({
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    borderRadius: 30,
    flexDirection: 'row' as FlexDirection,
    height,
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: '5%',
  }),
);
