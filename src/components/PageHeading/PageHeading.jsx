import PropTypes from 'prop-types';

import styles from './PageHeading.module.css';

export default function PageHeading({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
