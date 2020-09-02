// REDUX
import { combineReducers } from 'redux';

// REDUCERS
import films, { FilmsState } from './films';

export interface State {
  films: FilmsState;
}

const State = combineReducers({
  films,
});

export default State;
