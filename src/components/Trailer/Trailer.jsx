import styles from '../../pages/Pages.module.css';
const Trailer = ({ trailer }) => {
  return (
    <a
      className={styles.trailerLink}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.youtube.com/watch?v=${trailer}`}
    >
      Watch the Trailer
    </a>
  );
};

export default Trailer;
