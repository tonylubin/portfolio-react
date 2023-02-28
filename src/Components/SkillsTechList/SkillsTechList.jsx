import React from "react";
import styles from "./SkillsTechList.module.scss";
import SkillIcon from "../SkillIcon/SkillIcon";
import SkillsCard from "../SkillsCard/SkillsCard";

const SkillsTechList = ({ techstackIcons }) => {

  const getSkillsTechStack = techstackIcons.map((techstack, index) => (

        <SkillsCard 
        key = {index}
        icon = {<SkillIcon svgInfo={techstack.svgInfo} viewBox={techstack.viewBox} width="2em" height="2em"/>}
        />

  ));    

  return (
    <div className={styles.skillsList}>
      {getSkillsTechStack}
    </div>
  );
};

export default SkillsTechList;
