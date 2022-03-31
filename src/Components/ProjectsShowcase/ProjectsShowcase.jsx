import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsShowcase.module.scss";
import cardData from "../../data/projectData.js";

const ProjectsShowcase = () => {

  const getProjects = cardData.map((card, index) => (

    <ProjectCard
      key={index}
      title={card.title}
      info={card.info}
      imageUrl={card.imageUrl}
      imageAlt={card.imageAlt}
      isReversed={card.isReversed}
      projectViewUrl={card.view}
      projectCodeUrl={card.code}
      techstackIcons={card.techstackIcons}
    />   

  ));

  return (
    <section className={styles.projectsDisplay} id="projects">
      <SectionHeader heading="Projects" />
      {getProjects}
    </section>
  );
};

export default ProjectsShowcase;
