import { COMING_SOON_DATA } from '../actions/types';

const filmsState = {
  films: [],
};

function films(state = filmsState, action: any) {
  switch (action.type) {
    case COMING_SOON_DATA:
      return { ...state, films: action.payload };
    default:
      return state;
  }
}

export default films;
