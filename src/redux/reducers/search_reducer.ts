import {
  UPDATE_SEARCH_TERMS,
  searchTermsType,
} from '../actions/update_search_terms';
import {
  SET_SEARCH_RESULT,
  searchResultType,
} from '../actions/set_search_result';
import {
  updateSearchTermsHelper,
  setSearchResultHelper,
} from '../helpers/search_reducer_herlpers';
import { ENTITY_TYPES } from '../../constants';

export type SearchReducerType = {
  searchTerms: searchTermsType;
  searchResult: searchResultType;
};

const defaultState: SearchReducerType = {
  searchTerms: { entityType: ENTITY_TYPES.users, searchText: '' },
  searchResult: [],
};

const searchReducer = (
  state = defaultState,
  action: {
    type: string;
    searchTerms: searchTermsType;
    searchResult: searchResultType;
  }
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERMS:
      return updateSearchTermsHelper(state, action.searchTerms);
    case SET_SEARCH_RESULT:
      return setSearchResultHelper(state, action.searchResult);
    default:
      return state;
  }
};

export default searchReducer;
