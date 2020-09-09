import { SearchReducerType } from '../reducers/search_reducer';
import { searchTermsType } from '../actions/update_search_terms';
import { searchResultType } from '../actions/set_search_result';

export const updateSearchTermsHelper = (
  state: SearchReducerType,
  searchTerms: searchTermsType
) => ({
  ...state,
  searchTerms,
});

export const setSearchResultHelper = (
  state: SearchReducerType,
  searchResult: searchResultType
) => ({
  ...state,
  searchResult,
});
