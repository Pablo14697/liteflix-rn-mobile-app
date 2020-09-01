// REDUX
import { combineReducers } from 'redux';

// REDUCERS
import films from './films';

const State = combineReducers({
  films,
});

export default State;
