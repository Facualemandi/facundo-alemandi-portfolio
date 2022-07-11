import React, { useState } from "react";

export const useDeploy = () => {
  const [projectOne, setProjectOne] = useState(false);
  const [projectTwo, setProjectTwo] = useState(false);
  const [projectThree, setProjectThree] = useState(false);
  const [projectFour, setProjectFour] = useState(false);
  const [projectFive, setProjectFive] = useState(false);

  const firstProject = () =>
    !projectOne ? setProjectOne(true) : setProjectOne(false);
  const twoProject = () =>
    !projectTwo ? setProjectTwo(true) : setProjectTwo(false);
  const threeProject = () =>
    !projectThree ? setProjectThree(true) : setProjectThree(false);
  const fourProject = () =>
    !projectFour ? setProjectFour(true) : setProjectFour(false);
  const fiveProject = () =>
    !projectFive ? setProjectFive(true) : setProjectFive(false);

  return {
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    firstProject,
    twoProject,
    threeProject,
    fourProject,
    fiveProject,
  };
};
