import instance from './axiosInstance';

instance.interceptors.response.use(
  (res) => {
    if (res.data.isSucceeded) {
      return Promise.resolve(res.data.data);
    } else {
      return Promise.reject(res.data.status.message);
    }
  },
  (err) => {
    return Promise.reject(err.response);
  }
);

instance.interceptors.request.use(
  (req) => {
    req.responseType = 'json';
    return req;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
