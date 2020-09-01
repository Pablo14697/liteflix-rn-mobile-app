// REACT
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

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
  marginTop: 565,
  paddingLeft: 20,
  width: '100%',
});

export const PopulateSectionContainer = styled(View)({
  marginTop: 20,
  paddingHorizontal: 20,
  width: '100%',
});

export const StarringImage = styled(Image)({
  height: 600,
  width: '100%',
  zIndex: -1,
});
