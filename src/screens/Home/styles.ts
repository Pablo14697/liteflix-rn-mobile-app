// REACT
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const BurgerMenuButton = styled(TouchableOpacity)({});

export const Container = styled(View)({
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const HeaderContent = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginTop: '7%',
  position: 'absolute',
  width: '90%',
});

export const Fill = styled(View)({
  flexDirection: 'row',
  height: 30,
  width: 40,
});

export const NativeStyles = {
  hitSlop: { bottom: 10, left: 10, right: 10, top: 10 },
};

export const ScrollContent = styled(ScrollView)({
  flex: 1,
  width: '100%',
});

export const ComingSoonImage = styled(Image)({
  height: 200,
  width: '100%',
});

export const ComingSoonSectionContainer = styled(View)({
  marginTop: 80,
  paddingLeft: 20,
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
  backgroundColor: 'rgba(0,0,0,0.5)',
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

export const PopulateSectionContainer = styled(View)({
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
