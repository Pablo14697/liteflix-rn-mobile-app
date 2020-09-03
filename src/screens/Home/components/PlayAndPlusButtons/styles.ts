// REACT
import { TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../../../utils';

export const Fill = styled(View)({
  flexDirection: 'row',
  height: 30,
  width: 40,
});

export const OnImageContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 380,
  paddingRight: 20,
});

export const PlayButton = styled(TouchableOpacity)({
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: theme.colors.opacity70Black,
  borderRadius: 30,
  flexDirection: 'row',
  height: 45,
  justifyContent: 'center',
  width: '50%',
});

export const PlayContainer = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const PlusButton = styled(TouchableOpacity)({
  alignItems: 'center',
  borderColor: theme.colors.white,
  borderRadius: 20,
  borderWidth: 1,
  height: 40,
  justifyContent: 'center',
  width: 40,
});
