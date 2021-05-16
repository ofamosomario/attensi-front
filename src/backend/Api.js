import axios from 'axios'

export default () => {

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });

  instance.interceptors.request.use(function (config) {

    const authHeaders = JSON.parse(window.localStorage.getItem('authHeaders'));

    if (authHeaders) {
      config.headers[config.method] = {
        'authorization': authHeaders['authorization']
      }
    }

    return config;

  });

  instance.interceptors.response.use(function (response) {

    if (response.data['token']) {

      const authHeaders = {
        'authorization': 'Bearer ' + response.data['token']
      }

      window.localStorage.setItem('authHeaders', JSON.stringify(authHeaders));

    }


    return response;

  }, function (error) {
    return Promise.reject(error)
  });

  return instance
}