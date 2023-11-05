import styles from './SkillsCard.module.scss';

const SkillsCard = ({ icon, title, tooltip }) => {

  return (
  <div className={styles.card} title={tooltip}>
      {icon}
      <h5 className={styles.card__title}>{title}</h5>
  </div>
  )
};

export default SkillsCard;
