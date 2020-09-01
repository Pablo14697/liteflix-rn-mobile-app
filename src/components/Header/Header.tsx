// REACT
import React from 'react';

// ASSETS
import { ArrowBack } from '../../assets/images';

// STYLES
import { ArrowBackButton, Fill, HeaderContainer, NativeStyles } from './styles';

// COMPONENTS
import Typography from '../Typography/Typography';

// NAVIGATION
import { goBack } from '../../navigation';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => (
  <HeaderContainer>
    <ArrowBackButton hitSlop={NativeStyles.hitSlop} onPress={goBack}>
      <ArrowBack height={25} width={35} />
    </ArrowBackButton>
    <Typography color="white" size={20}>
      {title}
    </Typography>
    <Fill />
  </HeaderContainer>
);

export default Header;
