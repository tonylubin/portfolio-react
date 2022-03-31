import React from "react";
import styles from "./SkillsTechList.module.scss";
import SkillsCard from "../SkillsCard/SkillsCard";

const SkillsTechList = ({ techstackIcons }) => {

  const getSkillsTechStack = techstackIcons.map((techstack, index) => (

    <SkillsCard
      key={index}
      icon={techstack.icon}
      size={techstack.size}
      iconColor={techstack.iconColor}
    />
  ));    

  return (
    <div className={styles.skillsList}>
      {getSkillsTechStack}
    </div>
  );
};

export default SkillsTechList;
