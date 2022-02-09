import { noBackdrop } from '../../helpers/fallback';
import styles from './MovieDetailsInfo.module.css';
const imgUrl = 'https://image.tmdb.org/t/p/original';

export default function MovieDetailsInfo({ movie }) {
  return (
    <div className={styles.infoWrap}>
      {movie && (
        <>
          <div className={styles.imgWrap}>
            <img
              className={styles.backDropImg}
              src={
                movie.backdrop_path
                  ? `${imgUrl}${movie.backdrop_path}`
                  : noBackdrop
              }
              alt={movie.title}
            />
          </div>
          <h2 className={styles.movieTitle}>
            {movie.original_title}{' '}
            <span>({movie.release_date.slice(0, 4)})</span>
          </h2>
          <p>
            User score:{' '}
            <span className={styles.scoreValue}>
              {movie.vote_average * 10} %
            </span>
          </p>
          <p>Overview </p>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.genresWrap}>
            <span>Genres:</span>
            <ul className={styles.genresList}>
              {movie.genres.map(genre => (
                <li key={genre.id} className={styles.genresItem}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
