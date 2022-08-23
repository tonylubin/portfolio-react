import React from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SkillsCard from "../../Components/SkillsCard/SkillsCard";
import styles from "./SkillsList.module.scss";
import { techSkills } from "../../data/skillsData";
import SkillIcon from "../../Components/SkillIcon/SkillIcon";

const SkillsList = () => {

  const getSkillsCards = techSkills.map((skillcard, index) => (

    <SkillsCard
      key={index}
      icon={<SkillIcon svgInfo={skillcard.svgInfo} viewBox={skillcard.viewBox} width="3em" height="3em"/>}
      title={skillcard.title}
    />

  ));

  return (
    <section className={styles.skillsList} id="skills">
      <SectionHeader heading="Skills" />
      <div className={styles.skillsList__container}>
        {getSkillsCards}
      </div>
    </section>
  );
};

export default SkillsList;
