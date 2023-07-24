const BASE_URL = 'https://api.themoviedb.org/3';
// const ENDPOINT = '/trending/all/day';
const API_KEY = 'bb37d49c53a672415b33eb59b7e6ce07';

export const fetchData = endpoint => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);

  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
};

