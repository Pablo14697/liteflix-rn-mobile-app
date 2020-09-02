// REDUX
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// REDUCERS
import films, { FilmsState } from './films';

export interface State {
  films: FilmsState;
  form: object;
}

const State = combineReducers({
  films,
  form: formReducer,
});

export default State;
