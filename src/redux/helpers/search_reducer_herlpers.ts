import { storeStateType } from '../reducers/search_reducer';
import { searchTermsType } from '../actions/update_search_terms';
import { searchResultType } from '../actions/set_search_result';

export const updateSearchTermsHelper = (
  state: storeStateType,
  searchTerms: searchTermsType
) => ({
  ...state,
  searchTerms,
});

export const setSearchResultHelper = (
  state: storeStateType,
  searchResult: searchResultType
) => ({
  ...state,
  searchResult,
});
