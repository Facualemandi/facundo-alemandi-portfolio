import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";

import Technology from "../Technology/Technology";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
      <Technology />
      <Projects/>
    </>
  );
};

export default Home;
