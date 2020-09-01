import { COMING_SOON_DATA } from '../actions/types';
import { SetComingSoonFilmsAction } from '../actions/films';

export interface FilmsState {
  error: string;
  loading: boolean;
  films: object[];
}

const initialState: FilmsState = {
  error: '',
  loading: false,
  films: [],
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
