export default function MovieReviewsPage({ movie }) {
  const reviews = movie.reviews.results;

  return (
    <ul>
      {reviews.length > 0}
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>'{review.content}'</p>
        </li>
      ))}
      <p>We don't have any reviews for this movie</p>
    </ul>
  );
}
