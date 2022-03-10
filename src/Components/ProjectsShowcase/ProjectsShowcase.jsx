import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './ProjectsShowcase.module.scss';
import punkBeersScreenshotImage from '../../assets/images/punkbeers-screenshot.png';
import alienGameScreenshotImage from '../../assets/images/alienbattleships-screenshot.png';
import jsCalcScreenshotimage from '../../assets/images/jscalculator-screenshot.png';
import wheelOfFortuneScreenshotImage from '../../assets/images/wheeloffortune-screenshot.png';
import morsecodeTranslatorScreenshotImage from '../../assets/images/morsecodetranslator-screenshot.png';

const ProjectsShowcase = () => {

  const dummytext =  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores culpa, reiciendis, consectetur id consequuntur sequi nam natus suscipit quia perferendis quam dolores cumque accusantium sit repellat enim molestias! Inventore laudantium, illo illum, accusantium voluptatibus, ut omnis totam laboriosam assumenda quia";

  return (
    <section className={styles.projectsDisplay} id="projects">
      <SectionHeader heading="Projects" />
      <ProjectCard title="BrewDog Beer Finder App" info={dummytext} imageUrl={punkBeersScreenshotImage} imageAlt="Screenshot of a beer finder app using BrewDogs punk beers Api" isReversed={false} />
      <ProjectCard title="Spin a Fortune - Javascript Quiz Game " info={dummytext} imageUrl={wheelOfFortuneScreenshotImage} imageAlt="Screenshot of a wheel of fortune type quiz game" isReversed={true} />
      <ProjectCard title="Javascript Calculator App" info={dummytext} imageUrl={jsCalcScreenshotimage} imageAlt="Screenshot of a JS Calculator App" isReversed={false} />
      <ProjectCard title="Alien BattleShips - Javascript OOP Game" info={dummytext} imageUrl={alienGameScreenshotImage} imageAlt="Screenshot of BattleShips OOP Game" isReversed={true} />
      <ProjectCard title="Morse Code Translator App" info={dummytext} imageUrl={morsecodeTranslatorScreenshotImage} imageAlt="Screenshot of a Morse Code Translator" isReversed={false} />
    </section>
  )
}

export default ProjectsShowcase;