import React from 'react';
import { Bars } from 'react-loader-spinner';
import styles from './Spinner.module.css';
function Spinner() {
  return (
    <div className={styles.SpinnerWrap}>
      <Bars color="#6ea5f8" height={120} width={120} arialLabel="loading" />
    </div>
  );
}

export default Spinner;
