import { COMING_SOON_DATA, OUTSTANDING_DATA, POPULAR_DATA } from '../actions/types';
import { SetFilmsAction } from '../actions/films';

export type FilmsResults = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Films = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: FilmsResults[];
  total_pages: number;
  total_results: number;
};
export interface FilmsState {
  comingSoonFilms: Films;
  error: string;
  loading: boolean;
  outstandingFilms: Films;
  popularFilms: Films;
}

const initialFilms = {
  dates: { maximum: '', minimum: '' },
  page: 0,
  results: [
    {
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      id: 0,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ],
  total_pages: 0,
  total_results: 0,
};

const initialState: FilmsState = {
  comingSoonFilms: initialFilms,
  error: '',
  loading: false,
  outstandingFilms: initialFilms,
  popularFilms: initialFilms,
};

function films(state: FilmsState = initialState, action: SetFilmsAction) {
  console.log('ACTION', action);
  switch (action.type) {
    case COMING_SOON_DATA:
      return { ...state, comingSoonFilms: action.payload };
    case OUTSTANDING_DATA:
      return { ...state, outstandingFilms: action.payload };
    case POPULAR_DATA:
      return { ...state, popularFilms: action.payload };
    default:
      return state;
  }
}

export default films;
