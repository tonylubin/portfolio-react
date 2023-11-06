import { useEffect, useState } from "react";
import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import ProjectsShowcase from "./Containers/ProjectsShowcase/ProjectsShowcase";
import SkillsList from "./Containers/SkillsList/SkillsList";

function App() {
  // with Refresh, scrolls to top (dosen't store previous history/position)
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
        <MobileMenu menuOpen={menuOpen} handleClick={handleClick} />
        <Header menuOpen={menuOpen} handleClick={handleClick} />
        <LandingPage />
        <ProjectsShowcase />
        <SkillsList />
        <About />
        <Contact />
    </div>
  );
}

export default App;
