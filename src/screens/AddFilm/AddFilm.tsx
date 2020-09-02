// REACT
import React, { useState } from 'react';

// LIBS
import ImagePicker from 'react-native-image-crop-picker';

// COMPONENTS
import { AddFilmButton, Header, InputForm } from '../../components';

// STYLES
import {
  AddFilmContent,
  Container,
  DataContainer,
  EditIconContainer,
  FieldContainer,
  NativeStyles,
  PictureContainer,
  PostImage,
} from './styles';

// REDUX
import { reduxForm } from 'redux-form';

// ASSETS
import { CineIcon, PlusIcon } from '../../assets/images';

interface FormValues {
  title: string;
}

interface Props {
  handleSubmit: Function;
}

function AddFilm(props: Props) {
  //  const [loading, setLoading] = useState(false);
  const [movieImage, setMovieImage] = useState('');

  const getImage = () =>
    ImagePicker.openPicker({
      width: 600,
      height: 500,
      cropping: true,
    })
      .then((image) => {
        setMovieImage(image.path);
      })
      .catch((error) =>
        console.log('Error getting image from the photo library on AddFilm screen: ', error),
      );

  const getValues = (values: FormValues) => {
    console.log('Getting values', values);
  };

  const { handleSubmit } = props;
  return (
    <Container>
      <Header title="AÑADIR PELÍCULA" />
      <AddFilmContent>
        <DataContainer>
          <PictureContainer onPress={getImage}>
            {movieImage ? (
              <PostImage resizeMode="cover" source={{ uri: movieImage }} />
            ) : (
              <>
                <CineIcon height={120} width={120} style={{ opacity: 0.4 }} />
                <EditIconContainer>
                  <PlusIcon height={25} width={25} />
                </EditIconContainer>
              </>
            )}
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
