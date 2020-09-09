import searchReducer, { SearchReducerType } from './search_reducer';
import { combineReducers } from 'redux';

export type RootReducerType = {
  searchReducer: SearchReducerType;
};

const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
