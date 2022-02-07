import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import * as movieApi from '../services/movie-api';
import { useHistory, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      const fetchSearch = async () => {
        setLoading(true);

        await movieApi.fetchMovieByQuery(query).then(movies => {
          if (movies.results.length === 0) {
            setLoading(false);

            return toast.warning('There is no such movie', {
              theme: 'colored',
            });
          }

          setMovies(movies);
          setLoading(false);
        });
      };
      fetchSearch();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    let queryValue = e.currentTarget.elements.query.value;

    if (queryValue === '') {
      return;
    }

    if (queryValue.trim() === '') {
      return toast.warning('Enter movie title', {
        theme: 'colored',
      });
    }

    history.push({
      ...location,
      search: `query=${queryValue.trim()}`,
    });

    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search film "
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>

      {loading && <Spinner />}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}
