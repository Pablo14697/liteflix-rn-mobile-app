// REACT
import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

// LIBS
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

// COMPONENTS
import { AddFilmButton, ErrorMessageForm, Header } from '../../components';

// FORMS
import { Formik } from 'formik';
import * as Yup from 'yup';

// STYLES
import {
  AddFilmContent,
  Container,
  DataContainer,
  Field,
  FieldContainer,
  NativeStyles,
  PictureContainer,
  PostImage,
} from './styles';

// ASSETS
import { CineIcon } from '../../assets/images';

// UTILS
import { theme } from '../../utils';
import { MY_MOVIES } from '../../utils/constants';
import { goBack } from '../../navigation';

interface FormValues {
  title: string;
}

interface Movie {
  backdrop_path: string;
  title: string;
}

function AddFilm() {
  const [myMovies, setMyMovies] = useState<Movie[]>([]);
  const [movieImage, setMovieImage] = useState<string>('');
  const [values, setValues] = useState<FormValues>({ title: '' });

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

  const onSaveMovie = async (filmForm: FormValues) => {
    const { title } = filmForm;
    const newMovie = { title, backdrop_path: movieImage };

    myMovies.push(newMovie);
    const convertArrayToStringify = JSON.stringify(myMovies);
    await AsyncStorage.setItem(MY_MOVIES, convertArrayToStringify)
      .then(() => goBack())
      .catch(() =>
        Alert.alert('Error', 'Algo ha ido mal.', [
          {
            text: 'Reintentar',
            onPress: () => onSaveMovie(values),
          },
          {
            text: 'Cancelar',
          },
        ]),
      )
      .finally(() => setValues(filmForm));
  };

  const schemaValidacion = Yup.object({
    title: Yup.string().required('El título es requerido.'),
  });

  const getMyMovies = async () => {
    const MyMoviesStoraged = await AsyncStorage.getItem(MY_MOVIES);
    if (MyMoviesStoraged) {
      setMyMovies(JSON.parse(MyMoviesStoraged));
    }
  };

  useEffect(() => {
    getMyMovies();
  }, []);

  return (
    <Container>
      <Header title="AÑADIR PELÍCULA" />
      <Formik
        initialValues={{ title: '' }}
        onSubmit={(values) => {
          onSaveMovie(values);
        }}
        validationSchema={schemaValidacion}>
        {({ errors, handleChange, handleBlur, handleSubmit, touched, values }) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <AddFilmContent>
              <DataContainer>
                <PictureContainer onPress={getImage}>
                  {movieImage ? (
                    <PostImage resizeMode="cover" source={{ uri: movieImage }} />
                  ) : (
                    <CineIcon height={120} width={120} style={{ opacity: 0.4 }} />
                  )}
                </PictureContainer>
                {touched.title && !movieImage && (
                  <ErrorMessageForm title="Cargue una foto para agregar su película." />
                )}

                <FieldContainer>
                  <Field
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    placeholder="Ingrese nombre de la película *"
                    placeholderTextColor={theme.colors.boulder}
                    value={values.title}
                  />
                  {touched.title && errors.title && <ErrorMessageForm title={errors.title} />}
                </FieldContainer>
              </DataContainer>
              <AddFilmButton
                height={55}
                onPress={handleSubmit}
                style={NativeStyles.addFilm}
                title="AGREGAR"
                visiblePlusIcon={false}
              />
            </AddFilmContent>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </Container>
  );
}

export default AddFilm;
