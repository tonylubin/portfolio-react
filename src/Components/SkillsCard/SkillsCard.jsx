import React from 'react';
import styles from './SkillsCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SkillsCard = ({ icon, title, size, iconColor}) => {
  return (
  <div className={styles.card}>
      <FontAwesomeIcon icon={icon} size={size} className={styles[iconColor]} />
      <h5 className={styles.card__title}>{title}</h5>
  </div>
  )
};

export default SkillsCard;
