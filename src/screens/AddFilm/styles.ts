// REACT
import { SafeAreaView, View, StyleSheet } from 'react-native';

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
  bottom: 15,
  flexDirection: 'row',
  position: 'absolute',
  justifyContent: 'center',
});

export const FieldContainer = styled(View)({ alignSelf: 'center', width: '75%' });

export const NativeStyles = StyleSheet.create({
  addFilm: { width: '70%' },
});

export const PictureContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: 10,
  height: '45%',
  justifyContent: 'center',
  marginVertical: '10%',
  width: '75%',
});
