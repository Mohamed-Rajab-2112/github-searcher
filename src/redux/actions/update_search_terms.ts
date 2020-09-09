export const UPDATE_SEARCH_TERMS = 'UPDATE_SEARCH_TERMS';

export type searchTermsType = { searchText: string; entityType: string };

export const updateSearchTerms = (searchTerms: searchTermsType) => {
  return {
    type: UPDATE_SEARCH_TERMS,
    searchTerms,
  };
};
