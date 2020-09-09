import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.github.com/search/',
});


export default instance;
