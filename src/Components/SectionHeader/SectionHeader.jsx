import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ heading }) => {
  return <h1 className={styles.sectionTitle}>{heading}</h1>
}

export default SectionHeader;