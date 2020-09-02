// REACT
import React from 'react';

// STYLES
import { AddMovieButton } from './styles';

// ASSETS
import { PlusIcon } from '../../assets/images';

// COMPONENTS
import Spacing from '../Spacing/Spacing';
import Typography from '../Typography/Typography';

interface Props {
  height: number;
  onPress: () => void;
  style: object;
  title: string;
  visiblePlusIcon: boolean;
}

const AddFilmButton = ({ height, onPress, style, title, visiblePlusIcon }: Props) => (
  <AddMovieButton height={height} onPress={onPress} style={style}>
    {visiblePlusIcon && (
      <>
        <PlusIcon height={20} width={20} />
        <Spacing isHorizontal size={5} />
      </>
    )}
    <Typography color="white" size={20}>
      {title}
    </Typography>
  </AddMovieButton>
);

AddFilmButton.defaultProps = {
  height: 55,
  style: {},
  title: 'Agregar película',
  visiblePlusIcon: true,
};

export default AddFilmButton;
