const imgUrl = 'https://image.tmdb.org/t/p/w300';

export default function MovieCastPage({ movie }) {
  return (
    <ul>
      {movie.credits.cast.map(cast => (
        <li key={cast.cast_id}>
          {cast.profile_path ? (
            <img src={` ${imgUrl}${cast.profile_path}`} alt={cast.name} />
          ) : (
            'No image'
          )}

          <p>{cast.original_name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
}
