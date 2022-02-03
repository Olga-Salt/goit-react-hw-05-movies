import { toast } from 'react-toastify';
const KEY = '5fe4e7cb700e0e7e8be54b15a82973ef';
const BASE_URL = 'https://api.themoviedb.org/3/';

// 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=5fe4e7cb700e0e7e8be54b15a82973ef&language=en-US';

// const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? response.json()
    : Promise.reject(
        new Error(toast.error('Something went wrong :(', { theme: 'colored' }))
      );
}

export function fetchTrandMovie() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US&append_to_response=reviews,credits`
  );
}
