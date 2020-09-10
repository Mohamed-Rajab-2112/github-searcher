export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export type UserDataType = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export type RepoDataType = {
  id: number;
  name: string;
  owner: { login: string };
  stargazers_count: number;
  html_url: string;
};

export type SearchResultType = UserDataType[] | RepoDataType[];

export const setSearchResult = (searchResult: SearchResultType) => {
  return {
    type: SET_SEARCH_RESULT,
    searchResult,
  };
};
