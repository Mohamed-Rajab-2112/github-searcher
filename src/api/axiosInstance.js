import Axios from 'axios';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const instance = Axios.create({
  baseURL: 'https://api.github.com/search/',
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    toast.notify(err.response.data.message || 'Error Occured');
  }
);

instance.interceptors.request.use(
  (req) => {
    req.responseType = 'json';
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
