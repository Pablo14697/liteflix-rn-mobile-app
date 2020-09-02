// REACT
import React from 'react';

// COMPONENTS
import Spacing from '../Spacing/Spacing';
import Typography from '../Typography/Typography';

interface Props {
  title: string;
}

const ErrorMessageForm = ({ title }: Props) => (
  <>
    <Spacing size={4} />
    <Typography color="white">{title}</Typography>
  </>
);
ErrorMessageForm.defaultProps = {
  title: 'Error en el dato ingresado.',
};

export default ErrorMessageForm;
