//REACT
import React from 'react';
import { FlatList } from 'react-native';

// STYLES
import { MyMovieFilmButton, MyMovieImage, MyMoviesContainer, TitleContainer } from './styles';

// COMPONENTS
import { Spacing, Typography } from '../../../../components';

interface Movie {
  backdrop_path: string;
  title: string;
}

interface Props {
  data: Movie[];
}

export const MyMoviesList = ({ data }: Props) => {
  const getMyMoviesKeyExtractor = (item: Movie) => String(item.title);

  const renderMyMoviesItem = ({ item }: { item: Movie }) => {
    const title = item.title.length > 33 ? `${item.title.slice(0, 32)}..` : item.title;
    return (
      <MyMovieFilmButton>
        <MyMovieImage source={{ uri: item.backdrop_path }} />
        <TitleContainer>
          <Typography color="white" size={20}>
            {title.toUpperCase()}
          </Typography>
        </TitleContainer>
      </MyMovieFilmButton>
    );
  };

  const renderSeparator = () => <Spacing size={5} />;

  return (
    <MyMoviesContainer>
      <Typography color="white" size={22}>
        Mis películas
      </Typography>
      <Spacing size={5} />
      <FlatList
        data={data}
        keyExtractor={getMyMoviesKeyExtractor}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderMyMoviesItem}
      />
    </MyMoviesContainer>
  );
};

export default MyMoviesList;
