import React from 'react';
import { Fill, OnImageContent, PlayButton, PlayContainer, PlusButton } from './styles';

// ASSETS
import { PlayIcon, PlusIcon } from '../../../../assets/images';

// COMPONENTS
import { Spacing, Typography } from '../../../../components';

interface Props {
  onPressPlay: () => void;
  onPressPlus: () => void;
}

const PlayAndPlusButtons = ({ onPressPlay, onPressPlus }: Props) => (
  <OnImageContent>
    <Fill />
    <PlayButton onPress={onPressPlay}>
      <PlayContainer>
        <PlayIcon height={30} width={30} />
        <Spacing isHorizontal size={5} />
        <Typography color="white" size={20}>
          Reproducir
        </Typography>
      </PlayContainer>
    </PlayButton>
    <PlusButton onPress={onPressPlus}>
      <PlusIcon height={20} width={20} />
    </PlusButton>
  </OnImageContent>
);

PlayAndPlusButtons.defaultProps = {
  onPressPlay: () => {},
  onPressPlus: () => {},
};

export default PlayAndPlusButtons;
