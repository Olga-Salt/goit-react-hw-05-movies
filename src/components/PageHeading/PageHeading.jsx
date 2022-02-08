import styles from './PageHeading.module.css';
export default function PageHeading({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}
