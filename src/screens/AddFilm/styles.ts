// REACT
import { Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

// STYLES
import styled from 'styled-components';

// UTILS
import { theme } from '../../utils';

export const AddFilmContent = styled(View)({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'space-between',
  marginBottom: '10%',
  width: '100%',
});

export const Container = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  flex: 1,
});

export const DataContainer = styled(View)({
  alignItems: 'center',
  flex: 1,
  width: '100%',
});

export const EditIconContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.colors.mineShaft2,
  borderRadius: 10,
  bottom: 5,
  height: 50,
  justifyContent: 'center',
  position: 'absolute',
  right: 5,
  width: 50,
});

export const Field = styled(TextInput)({
  backgroundColor: theme.colors.mineShaft2,
  borderRadius: 4,
  color: theme.colors.white,
  height: 40,
  paddingHorizontal: 10,
});

export const FieldContainer = styled(View)({ alignSelf: 'center', marginTop: 20, width: '75%' });

export const NativeStyles = StyleSheet.create({
  addFilm: { width: '70%' },
});

export const PictureContainer = styled(TouchableOpacity)({
  alignItems: 'center',
  backgroundColor: theme.colors.opacity75White,
  borderRadius: 10,
  height: '45%',
  justifyContent: 'center',
  marginTop: '10%',
  width: '75%',
});

export const PostImage = styled(Image)({
  borderRadius: 10,
  height: '100%',
  width: '100%',
});
