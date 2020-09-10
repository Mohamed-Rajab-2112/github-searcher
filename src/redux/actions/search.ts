import { setSearchResult } from './set_search_result';
import { updateSearchTerms } from './update_search_terms';
import { searchRepos, searchUsers } from '../../api/apiCalls';
import {
  createImperativePromise,
  CancelCallback,
} from 'awesome-imperative-promise';
import { ENTITY_TYPES, MINIMUIM_SEARCH_CHARS_COUNT } from '../../constants';

export let cancelSearchPromise: CancelCallback;

export const search = (searchText: string, entityType: string) => {
  return async (dispatch: any) => {
    if (searchText.length >= MINIMUIM_SEARCH_CHARS_COUNT) {
      let searchResult;
      if (entityType === ENTITY_TYPES.users) {
        const { cancel, promise } = createImperativePromise(
          searchUsers(searchText)
        );
        cancelSearchPromise = cancel;
        searchResult = await promise;
      } else {
        const { cancel, promise } = createImperativePromise(
          searchUsers(searchText)
        );
        cancelSearchPromise = cancel;
        searchResult = await promise;
      }
      if (searchResult) {
        dispatch(setSearchResult(searchResult?.data.items));
      }
      dispatch(updateSearchTerms({ searchText, entityType }));
    } else {
      if (cancelSearchPromise) {
        cancelSearchPromise();
      }
      dispatch(setSearchResult([]));
      dispatch(updateSearchTerms({ searchText, entityType }));
    }
  };
};
