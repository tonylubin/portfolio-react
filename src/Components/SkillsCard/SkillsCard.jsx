import React from 'react';
import styles from './SkillsCard.module.scss';


const SkillsCard = ({ icon, title }) => {

  return (
  <div className={styles.card}>
      {icon}
      <h5 className={styles.card__title}>{title}</h5>
  </div>
  )
};

export default SkillsCard;
