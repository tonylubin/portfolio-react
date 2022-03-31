import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsShowcase.module.scss";
import cardData from "../../data.js";

const ProjectsShowcase = () => {

  const getProjects = cardData.map((data, index) => (

    <ProjectCard
      key={index}
      title={data.title}
      info={data.info}
      imageUrl={data.imageUrl}
      imageAlt={data.imageAlt}
      isReversed={data.isReversed}
      projectViewUrl={data.view}
      projectCodeUrl={data.code}
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
