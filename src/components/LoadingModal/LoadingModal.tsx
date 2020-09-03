// REACT NATIVE
import React from 'react';
import { Modal } from 'react-native';

// LIBS
import LottieView from 'lottie-react-native';

// COMPONENTS & STYLED
import { LoadingModalContainer, NativeStyles } from './styles';

// RESOURCEs
import LoadingDotsDarkBlue from '../../assets/animations';

interface Props {
  visible: boolean;
}

const LoadingModal = ({ visible }: Props) => (
  <Modal transparent visible={visible}>
    <LoadingModalContainer>
      <LottieView autoPlay loop source={LoadingDotsDarkBlue} style={NativeStyles.loadingDots} />
    </LoadingModalContainer>
  </Modal>
);

export default LoadingModal;
