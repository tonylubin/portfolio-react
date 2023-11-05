import styles from "./SkillsTechList.module.scss";
import Icon from "../Icon/Icon";
import SkillsCard from "../SkillsCard/SkillsCard";
import { techSkills } from "../../data/skillsData";

const SkillsTechList = ({ techstackIcons }) => {

  const getSkillsTechStack = techstackIcons.map((skill, i) => {

    const iconIndex = techSkills.findIndex((tech) => tech.title.toLowerCase() === skill);
  
    const techIcon = techSkills[iconIndex];
    
    return (
      <SkillsCard
        key={i}
        tooltip={techIcon.title}
        icon={
          <Icon
            path={techIcon.icon}
            classname={styles.skillIcon}
          />
        }
      />
    )
  });

  return <div className={styles.skillsList}>{getSkillsTechStack}</div>;
};

export default SkillsTechList;
