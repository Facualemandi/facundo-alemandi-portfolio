import React from "react";
import styled from "styled-components";
import { useThemeMode } from "../../Context/themeContext";

const Main = styled.main`
  height: auto;
  background-color: ${({ valor }) => (!valor ? "rgb(18 26 44)" : "#f7f7f7")};
  transition: 0.5s;
`;

const SectionOne = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 15px;
  @media (min-width: 1250px) {
    width: 1250px;
  }
`;

const H2 = styled.h2`
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  width: 90vw;
  margin: auto;
  letter-spacing: 3px;
  color: ${({ valor }) => (!valor ? "#5af5ff" : "#ee5ca5")};
  transition: 0.5s;

  @media (min-width: 1200px) {
    width: 1250px;
  }
`;

const Parraagraph = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: white;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: auto;
  margin-top: 15px;
  width: 90vw;
  @media (min-width: 1250px) {
    width: 1250px;
  }
`;

const Bold = styled.b`
  color: ${({ valor }) => (!valor ? "#66c7ff" : "#ff7cbe")};
  transition: 0.5s;
`;

export const AboutMe = ({ isAboutMe }) => {
  const { theme } = useThemeMode();

  return (
    <>
      <Main valor={theme}>
        <SectionOne>
          <H2 valor={theme} ref={isAboutMe}>
            Sobre Mi 📗
          </H2>
          <Parraagraph valor={theme}>
            Me llamo <Bold valor={theme}>Facundo Alemandi</Bold>, soy de{" "}
            <Bold valor={theme}>Argentina, Córdoba Capital</Bold> y Me
            especializo en <Bold valor={theme}>Desarrollo Frontend</Bold>. A
            finales de 2021 (1 de diciembre) empecé a aprender programación.
            Comencé con los conceptos básicos <Bold valor={theme}>HTML</Bold>,{" "}
            <Bold valor={theme}>CSS</Bold>, Después seguí con{" "}
            <Bold valor={theme}>JavaScript</Bold>,{" "}
            <Bold valor={theme}>Git</Bold>,<Bold valor={theme}> Github </Bold>y
            actualmente estoy usando <Bold valor={theme}>React</Bold>. Mi
            objetivo es obtener mi primera experiencia laboral como
            desarrollador Front End.
          </Parraagraph>
        </SectionOne>
      </Main>
    </>
  );
};
