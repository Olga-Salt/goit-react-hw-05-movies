const imgUrl = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsInfo({ movie }) {
  return (
    <>
      {movie && (
        <>
          <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
          <h2>
            {movie.original_title}{' '}
            <span>({movie.release_date.slice(0, 4)})</span>
          </h2>
          <p>User score: {movie.vote_average * 10} %</p>
          <p>Overview </p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
