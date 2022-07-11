import React from "react";
import { AboutMe } from "../../Components/AboutMe/AboutMe";
import Header from "../../Components/Header/Header";
import MenuBottom from "../../Components/MenuBottom/MenuBottom";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import { useSmooth } from "../../Hooks/useSmooth";

const Home = () => {
  const {
    isAboutMe,
    isProjects,
    isSkills,
    handleAbout,
    handleSkills,
    handleProject,
  } = useSmooth();

  return (
    <>
      <Header
        handleAbout={handleAbout}
        handleProject={handleProject}
        handleSkills={handleSkills}
      />
      <AboutMe isAboutMe={isAboutMe} />
      <Skills isSkills={isSkills} />
      <Projects isProjects={isProjects} />
      <MenuBottom
        handleAbout={handleAbout}
        handleSkills={handleSkills}
        handleProject={handleProject}
      />
    </>
  );
};

export default Home;
