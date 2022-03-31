import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkillsCard from "../SkillsCard/SkillsCard.jsx";
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
      <SectionHeader heading="Skills" />
      <div className={styles.skillsList__container}>
        {getSkillsCards}
      </div>
    </section>
  );
};

export default SkillsList;
