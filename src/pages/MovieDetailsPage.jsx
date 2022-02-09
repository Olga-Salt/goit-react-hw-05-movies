import { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';

import * as movieApi from '../services/movie-api';
import MovieDetailsInfo from '../components/MovieDetailsInfo/MovieDetailsInfo';
import MovieDetailsNav from '../components/MovieDetailsNav/MovieDetailsNav';
import Trailer from '../components/Trailer/Trailer';

import styles from './Pages.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const { movieId } = useParams();
  const match = useRouteMatch();
  const hist = useHistory();
  const location = useLocation();

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(movie => {
      setMovie(movie);
      setTrailer(movie.videos.results[0].key);
    });
  }, [movieId]);

  const goBack = () => {
    hist.push(location?.state?.from ?? '/movies');
  };

  return (
    <div className={styles.ditailsWrap}>
      <div>
        <button onClick={goBack} className={styles.goBackBtn}>
          <IoArrowBackSharp /> Go Back
        </button>
      </div>

      <MovieDetailsInfo movie={movie} />
      <h3>Additional information</h3>

      <MovieDetailsNav movie={movie} match={match} />
      {trailer && <Trailer trailer={trailer} />}
    </div>
  );
}
