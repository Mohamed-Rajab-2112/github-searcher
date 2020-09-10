import instance from './axiosInstance';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const DEBOUNCE_TIME = 500;

export const searchUsers = AwesomeDebouncePromise((userName) => {
  return instance.get('users', {
    params: {
      q: userName,
      sort: 'stars',
      order: 'desc',
    },
  });
}, DEBOUNCE_TIME);

export const searchRepos = AwesomeDebouncePromise(
  (repoName) =>
    instance.get('repositories', {
      params: {
        q: repoName,
        sort: 'stars',
        order: 'desc',
      },
    }),
  DEBOUNCE_TIME
);
