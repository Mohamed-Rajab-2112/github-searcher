import { setSearchResult } from './set_search_result';
import { updateSearchTerms } from './update_search_terms';
import { searchRepos, searchUsers } from '../../api/apiCalls';

export const search = (searchText: string, entityType: string) => {
  return async (dispatch) => {
    let searchResult;
    if (searchText.length >= 3) {
      if (entityType === 'users') {
        searchResult = await searchUsers(searchText);
      } else {
        searchResult = await searchRepos(searchText);
      }
      dispatch(setSearchResult(searchResult));
      dispatch(updateSearchTerms({ searchText, entityType }));
    }
  };
};
