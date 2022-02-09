import styles from './Pages.module.css';
export default function MovieReviewsPage({ movie }) {
  const reviews = movie.reviews.results;

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p className={styles.author}>
                <b>Author :</b>{' '}
                <span className={styles.authorName}>{review.author}</span>
              </p>
              <p className={styles.reviewText}>"{review.content}"</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
