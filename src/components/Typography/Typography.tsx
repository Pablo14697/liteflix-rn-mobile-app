// REACT
import React from 'react';

// STYLES
import { StyledText } from './styles';

// UTILS
import { theme } from '../../utils';

export interface TypographyProps {
  color: keyof typeof theme.colors;
  children: React.ReactNode;
  size: number;
  textAlign: 'center' | 'justify' | 'left' | 'right';
}

const Typography = ({ children, ...props }: TypographyProps) =>
  !children ? null : (
    <StyledText allowFontScaling={false} {...props}>
      {children}
    </StyledText>
  );

Typography.defaultProps = {
  color: 'primary',
  children: null,
  size: 12,
  textAlign: 'left',
};

export default Typography;
