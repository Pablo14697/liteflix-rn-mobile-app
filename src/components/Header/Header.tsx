// REACT
import React from 'react';

// ASSETS
import { ArrowBack } from '../../assets/images';
import { ArrowBackButton, Fill, HeaderContainer, NativeStyles } from './styles';
import Typography from '../Typography/Typography';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => (
  <HeaderContainer>
    <ArrowBackButton hitSlop={NativeStyles.hitSlop}>
      <ArrowBack height={30} width={40} />
    </ArrowBackButton>
    <Typography color="white" size={20}>
      {title}
    </Typography>
    <Fill />
  </HeaderContainer>
);

export default Header;
