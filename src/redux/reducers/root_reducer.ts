import searchReducer from './search_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
