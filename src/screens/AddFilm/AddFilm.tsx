// REACT
import React from 'react';

// COMPONENTS
import { AddFilmButton, Header, InputForm, Spacing } from '../../components';

// STYLES
import {
  AddFilmContent,
  Container,
  DataContainer,
  EditIconContainer,
  FieldContainer,
  NativeStyles,
  PictureContainer,
} from './styles';

// REDUX
import { reduxForm } from 'redux-form';

// ASSETS
import { CineIcon, EditIcon } from '../../assets/images';

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
      <AddFilmContent>
        <DataContainer>
          <PictureContainer>
            <CineIcon height={120} width={120} />
            <Spacing />
            <EditIconContainer>
              <EditIcon height={30} width={30} />
            </EditIconContainer>
          </PictureContainer>
          <FieldContainer>
            <InputForm name="title" placeholder="Título de la película" />
          </FieldContainer>
        </DataContainer>
        <AddFilmButton
          height={55}
          onPress={handleSubmit(getValues)}
          style={NativeStyles.addFilm}
          title="AGREGAR"
          visiblePlusIcon={false}
        />
      </AddFilmContent>
    </Container>
  );
}

export default reduxForm({
  form: 'addFilms',
})(AddFilm);
