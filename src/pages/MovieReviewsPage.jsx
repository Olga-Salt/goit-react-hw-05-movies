export default function MovieReviewsPage({ movie }) {
  return (
    <ul>
      {movie.reviews.results.map(review => (
        <li key={review.id}>
          {review.content ? (
            <>
              <p>Author: {review.author}</p>
              <p>'{review.content}'</p>
            </>
          ) : (
            'no discription'
          )}
        </li>
      ))}
    </ul>
  );
}
