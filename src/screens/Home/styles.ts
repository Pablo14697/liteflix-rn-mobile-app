// REACT
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';
import { hastNotch } from '../../utils/devices';

export const BurgerMenuButton = styled(TouchableOpacity)({});

export const Container = styled(View)({
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const GradientColors = [
  theme.colors.opacity50Black,
  theme.colors.opacity0Black,
  theme.colors.opacity0Black,
  theme.colors.opacity100Black,
];

export const HeaderContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginTop: hastNotch ? '7%' : 0,
  position: 'absolute',
  width: '90%',
});

export const Fill = styled(View)({
  flexDirection: 'row',
  height: 30,
  width: 40,
});

export const NativeStyles = StyleSheet.create({
  columnFlatList: { justifyContent: 'space-between' },
  footerFlatList: { width: '100%', marginBottom: '20%' },
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
  linearGradient: { height: '100%', width: '100%' },
});

export const ComingSoonImage = styled(Image)({
  height: 200,
  width: '100%',
});

export const ComingSoonFilmButton = styled(TouchableOpacity)({ alignSelf: 'center', width: '90%' });

export const ComingSoonSectionContainer = styled(View)(
  ({ isMarginTop }: { isMarginTop: boolean }) => ({
    marginTop: isMarginTop ? 80 : 20,
    paddingHorizontal: 20,
    width: '100%',
  }),
);

export const MyMovieImage = styled(Image)({
  height: 200,
  width: '100%',
});

export const MyMovieFilmButton = styled(TouchableOpacity)({ alignSelf: 'center', width: '100%' });

export const MyMoviesContainer = styled(View)({
  marginTop: 80,
  paddingHorizontal: 20,
  width: '100%',
});

export const OnImageContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 380,
  paddingRight: 20,
});

export const PlayContainer = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
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

export const PlusContainer = styled(TouchableOpacity)({
  alignItems: 'center',
  borderColor: theme.colors.white,
  borderRadius: 20,
  borderWidth: 1,
  height: 40,
  justifyContent: 'center',
  width: 40,
});

export const PopupalateFilmButton = styled(TouchableOpacity)({ width: '49.5%' });

export const PopularImage = styled(Image)({
  height: 300,
});

export const PopularSectionContainer = styled(View)({
  marginTop: 20,
  paddingHorizontal: 20,
  width: '100%',
});

export const StarringImage = styled(ImageBackground)({
  height: 600,
  position: 'absolute',
  width: '100%',
  zIndex: -1,
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
