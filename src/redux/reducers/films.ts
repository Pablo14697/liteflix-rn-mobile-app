import { FILMS_DATA, FILMS_DATA_ERROR, UPDATE_FLAG } from '../actions/types';
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

type Movie = {
  backdrop_path: string;
  title: string;
};

export type Films = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: FilmsResults[];
  total_pages: number;
  total_results: number;
};

export type SetOfFilms = {
  comingSoon: Films;
  myMovies: Movie[];
  outstanding: Films;
  popular: Films;
};

export interface FilmsState {
  error: boolean;
  films: SetOfFilms;
  updateFlagStatus: boolean;
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

const initialMyMovies: Movie[] = [];

const initialState: FilmsState = {
  error: false,
  films: {
    comingSoon: initialFilms,
    myMovies: initialMyMovies,
    outstanding: initialFilms,
    popular: initialFilms,
  },
  updateFlagStatus: false,
};

function films(state: FilmsState = initialState, action: SetFilmsAction) {
  switch (action.type) {
    case FILMS_DATA:
      return { ...state, films: action.payload };
    case FILMS_DATA_ERROR:
      return { ...state, error: action.error };
    case UPDATE_FLAG:
      return { ...state, updateFlagStatus: action.payload };
    default:
      return state;
  }
}

export default films;
