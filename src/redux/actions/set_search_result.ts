export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export type searchResultType = any;

export const setSearchResult = (searchResult: searchResultType) => {
  return {
    type: SET_SEARCH_RESULT,
    searchResult,
  };
};
