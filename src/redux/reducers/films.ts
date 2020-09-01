import { COMING_SOON_DATA } from '../actions/types';
import { SetComingSoonFilmsAction } from '../actions/films';

type FilmsResults = {
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
  error: string;
  loading: boolean;
  films: Films;
}

const initialState: FilmsState = {
  error: '',
  loading: false,
  films: {
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
  },
};

function films(state: FilmsState = initialState, action: SetComingSoonFilmsAction) {
  switch (action.type) {
    case COMING_SOON_DATA:
      return { ...state, films: action.payload };
    default:
      return state;
  }
}

export default films;
