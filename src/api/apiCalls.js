import instance from './axiosInstance';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const DEBOUNCE_TIME = 500;

export const searchUsers = AwesomeDebouncePromise((userName) => {
  console.log(userName);
  return instance.get('users', {
    params: {
      q: userName,
    },
  });
}, DEBOUNCE_TIME);

export const searchRepos = AwesomeDebouncePromise(
  (repoName) =>
    instance.get('repositories', {
      params: {
        q: repoName,
      },
    }),
  DEBOUNCE_TIME
);
