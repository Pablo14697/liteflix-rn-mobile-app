// REACT
import React from 'react';

// STYLES
import { BurgerMenuButton, Fill, HeaderContent, NativeStyles } from './styles';

// ASSETS
import { BurgerIcon, BurgerIconWhite, Liteflix } from '../../../../assets/images';

interface Props {
  colorBurgerButton: 'black' | 'white';
  navigation: any;
  poster: string | false;
}

const HeaderMenu = ({ colorBurgerButton, navigation, poster }: Props) => {
  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };
  return (
    <HeaderContent>
      <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={openDrawerNavigator}>
        {poster && colorBurgerButton === 'black' ? (
          <BurgerIcon height={30} width={40} />
        ) : (
          <BurgerIconWhite height={30} width={40} />
        )}
      </BurgerMenuButton>
      <Liteflix height={60} width={140} />
      <Fill />
    </HeaderContent>
  );
};
HeaderMenu.defaultProps = {
  colorBurgerButton: 'black',
};

export default HeaderMenu;
