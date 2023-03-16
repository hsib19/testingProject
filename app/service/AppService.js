import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';

async function get(url) {

  const result = axios({
    url: API_URL + url,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then(result => {
      return result.data;
    })
    .catch(error => {
      return Promise.reject(error);
    });

  return result;
}

const AppService = {
  get,
}

export default AppService;


