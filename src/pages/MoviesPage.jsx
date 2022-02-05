import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import * as movieApi from '../services/movie-api';
import { Link, useHistory } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

export default function MoviesPage() {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams();
  const query = new URLSearchParams(search).get('query');

  useEffect(() => {
    if (query) {
      movieApi.fetchMovieByQuery(query).then(movies => {
        setMovies(movies);
      });
    }
  }, [query]);

  const fetchSearch = async e => {
    e.preventDefault();

    if (name === '') {
      return;
    }

    if (name.trim() === '') {
      return toast.warning('Enter movie title', {
        theme: 'colored',
      });
    }

    if (name) {
      params.append('query', name.trim());
    } else {
      params.delete('query');
    }
    history.push({ search: params.toString() });

    setLoading(true);

    await movieApi.fetchMovieByQuery(name).then(movies => {
      if (movies.results.length === 0) {
        setLoading(false);

        return toast.warning('There is no such movie', {
          theme: 'colored',
        });
      }

      setMovies(movies);
      setLoading(false);
    });

    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <div>
      <form onSubmit={fetchSearch}>
        <input
          onChange={e => setName(e.target.value.toLowerCase())}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          value={name}
          placeholder="Search film "
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>

      {loading && <Spinner />}
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
