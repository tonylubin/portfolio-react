import styles from './CardLink.module.scss';

const CardLink = ({ url, icon, text }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {icon}
      {text}
    </a>
  );
};

export default CardLink;
