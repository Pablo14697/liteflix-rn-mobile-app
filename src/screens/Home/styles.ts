// REACT
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const Container = styled(View)({
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const ComingSoonFilmButton = styled(TouchableOpacity)({ alignSelf: 'center', width: '90%' });

export const ComingSoonImage = styled(Image)({
  height: 200,
  width: '100%',
});

export const ComingSoonSectionContainer = styled(View)(
  ({ isMarginTop }: { isMarginTop: boolean }) => ({
    marginTop: isMarginTop ? 80 : 20,
    paddingHorizontal: 20,
    width: '100%',
  }),
);

export const GradientColors = [
  theme.colors.opacity50Black,
  theme.colors.opacity0Black,
  theme.colors.opacity0Black,
  theme.colors.opacity100Black,
];

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

export const NativeStyles = StyleSheet.create({
  columnFlatList: { justifyContent: 'space-between' },
  footerFlatList: { width: '100%', marginBottom: '20%' },
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
  linearGradient: { height: '100%', width: '100%' },
  warningScrollView: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
});

export const PopularFilmButton = styled(TouchableOpacity)({ width: '49.5%' });

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

export const UpArrowContainer = styled(TouchableOpacity)({
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: 25,
  height: 50,
  justifyContent: 'center',
  marginTop: 20,
  width: 50,
});

export const WarningContainer = styled(ScrollView)({
  flex: 1,
});

export const WarningIconContainer = styled(View)({
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '50%',
  width: '55%',
});
