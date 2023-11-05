import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import styles from "./ProjectsShowcase.module.scss";
import cardData from "../../data/projectData.json";

const ProjectsShowcase = () => {

  const getProjects = cardData.map((card, index) => (

    <ProjectCard
      key={index}
      title={card.title}
      info={card.info}
      imageUrl={card.imageUrl}
      imageAlt={card.imageAlt}
      isReversed={card.isReversed}
      projectViewUrl={card.projectViewUrl}
      projectCodeUrl={card.projectCodeUrl}
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
