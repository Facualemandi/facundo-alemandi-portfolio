import { useRef } from "react";

export const useSmooth = () => {
  const isAboutMe = useRef();
  const isSkills = useRef();
  const isProjects = useRef();

  const handleAbout = () => {
    isAboutMe.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSkills = () => {
    isSkills.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProject = () => {
    isProjects.current.scrollIntoView({ behavior: "smooth" });
  };

  return {
    isAboutMe,
    isSkills,
    isProjects,
    handleAbout,
    handleSkills,
    handleProject,
  };
};
