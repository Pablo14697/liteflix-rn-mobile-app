// REACT
import { View } from 'react-native';

// STYLES
import styled from 'styled-components';

// TYPES
import { SpacingProps } from './Spacing';

export const SpacingBlock = styled(View)(({ isHorizontal, size }: SpacingProps) =>
  isHorizontal ? { marginHorizontal: size } : { marginVertical: size },
);
