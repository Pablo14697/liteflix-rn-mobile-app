// REACT
import { TextProperties, Text } from 'react-native';

// STYLES
import styled from 'styled-components/native';

// UTILS
import { theme } from '../../utils';

type StyledTextProps = {
  color: keyof typeof theme.colors;
  size: number;
  textAlign: 'center' | 'justify' | 'left' | 'right';
} & TextProperties;

export const StyledText = styled(Text)((p: StyledTextProps) => ({
  color: theme.colors[p.color],
  fontSize: p.size,
  textAlign: p.textAlign,
}));
