// REACT
import React from 'react';

// COMPONENTS
import { AddFilmButton, Header, InputForm, Typography } from '../../components';

// STYLES
import { Container, FieldContainer, NativeStyles } from './styles';

// REDUX
import { reduxForm } from 'redux-form';

interface FormValues {
  title: string;
}

interface Props {
  handleSubmit: Function;
}

function AddFilm(props: Props) {
  const getValues = (values: FormValues) => {
    console.log('Getting values', values);
  };
  const { handleSubmit } = props;
  return (
    <Container>
      <Header title="AÑADIR PELÍCULA" />
      <FieldContainer>
        <Typography color="white" size={16}>
          Título
        </Typography>
        <InputForm name="title" placeholder="Título de la película." />
      </FieldContainer>
      <AddFilmButton
        height={40}
        onPress={handleSubmit(getValues)}
        style={NativeStyles.addFilm}
        title="AGREGAR"
        visiblePlusIcon={false}
      />
    </Container>
  );
}

export default reduxForm({
  form: 'addFilms',
})(AddFilm);
