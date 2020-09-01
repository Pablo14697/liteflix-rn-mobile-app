// REACT
import React from 'react';

// STYLES
import { SpacingBlock } from './styles';

export interface SpacingProps {
  isHorizontal: boolean;
  size: number;
}
const Spacing = ({ isHorizontal, size }: SpacingProps) => (
  <SpacingBlock isHorizontal={isHorizontal} size={size} />
);
Spacing.defaultProps = {
  isHorizontal: false,
  size: 20,
};

export default Spacing;
