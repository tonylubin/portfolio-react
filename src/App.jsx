import React, { useEffect } from 'react';
import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import ProjectsShowcase from './Containers/ProjectsShowcase/ProjectsShowcase';
import SkillsList from './Containers/SkillsList/SkillsList';

function App() {

  // with Refresh, scrolls to top (dosen't store previous history/position)
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="App">
      <Header />
      <LandingPage />
      <ProjectsShowcase />
      <SkillsList />
      <About />
      <Contact />
    </div>
  );
}

export default App;
