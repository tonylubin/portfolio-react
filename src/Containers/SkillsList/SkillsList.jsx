import React from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SkillsCard from "../../Components/SkillsCard/SkillsCard";
import styles from "./SkillsList.module.scss";
import skillsCardData from "../../data/skillsData";

const SkillsList = () => {

  const getSkillsCards = skillsCardData.map((skillcard, index) => (

    <SkillsCard
      key={index}
      icon={skillcard.icon}
      iconColor={skillcard.iconColor}
      title={skillcard.title}
      size={skillcard.size}
    />

  ));

  return (
    <section className={styles.skillsList} id="skills">
      <SectionHeader heading="Skills / Tech Stack" />
      <div className={styles.skillsList__container}>
        {getSkillsCards}
      </div>
    </section>
  );
};

export default SkillsList;
