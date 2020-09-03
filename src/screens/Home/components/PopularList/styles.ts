// REACT
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../../../utils';

export const NativeStyles = StyleSheet.create({
  columnFlatList: { justifyContent: 'space-between' },
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
