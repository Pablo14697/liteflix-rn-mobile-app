// REACT
import { Image, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../../../utils';

export const MyMovieFilmButton = styled(TouchableOpacity)({ alignSelf: 'center', width: '100%' });

export const MyMovieImage = styled(Image)({
  height: 200,
  width: '100%',
});

export const MyMoviesContainer = styled(View)({
  marginTop: 80,
  paddingHorizontal: 20,
  width: '100%',
});

export const TitleContainer = styled(View)({
  alignSelf: 'center',
  backgroundColor: theme.colors.opacity70Black,
  borderRadius: 10,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingHorizontal: 20,
  paddingVertical: 5,
  position: 'absolute',
  top: '45%',
});
