// REACT
import React from 'react';
import { FlatList } from 'react-native';

// STYLES
import {
  NativeStyles,
  PopularFilmButton,
  PopularImage,
  PopularSectionContainer,
  TitleContainer,
  UpArrowContainer,
} from './styles';

// COMPONENTS
import { Spacing, Typography } from '../../../../components';

// UTILS
import Config from '../../../../config';

// ASSETS
import { UpArrow } from '../../../../assets/images';

// TYPES
import { FilmsResults } from '../../../../redux/reducers/films';

interface Props {
  data: FilmsResults[];
  flatListRef: any;
}

const PopularList = ({ data, flatListRef }: Props) => {
  const getKeyExtractor = (item: FilmsResults) => String(item.id);

  const renderPopularItem = ({ item }: { item: FilmsResults }) => {
    const title = item.title.length > 33 ? `${item.title.slice(0, 32)}..` : item.title;
    return (
      <PopularFilmButton>
        <PopularImage source={{ uri: `${Config.IMAGES_API_URL}${item.backdrop_path}` }} />
        <TitleContainer>
          <Typography color="white" size={20} textAlign="center">
            {title.toUpperCase()}
          </Typography>
        </TitleContainer>
      </PopularFilmButton>
    );
  };

  const renderSeparator = () => <Spacing size={2} />;

  const goToTop = () => {
    flatListRef.current.scrollToOffset({ offset: 0 });
  };

  const renderPopularFilmsFooter = () => (
    <UpArrowContainer onPress={goToTop}>
      <UpArrow height={30} width={30} />
    </UpArrowContainer>
  );

  return (
    <PopularSectionContainer>
      <Typography color="white" size={22}>
        Populares de Liteflix
      </Typography>
      <Spacing size={5} />
      <FlatList
        data={data}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderPopularFilmsFooter}
        keyExtractor={getKeyExtractor}
        numColumns={2}
        renderItem={renderPopularItem}
        columnWrapperStyle={NativeStyles.columnFlatList}
      />
    </PopularSectionContainer>
  );
};

export default PopularList;
