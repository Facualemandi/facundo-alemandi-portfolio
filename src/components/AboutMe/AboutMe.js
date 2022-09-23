import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: auto;
  width: 100%;
  background-color: rgb(16,23,29);
`;

const SectionOne = styled.section`
  width: 95vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 15px;

  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #8ab4f8;
  transition: 0.5s;
  width: max-content;
`;

const Parraagraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: white;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-top: 15px;
  width: 100%;
  @media (min-width: 1250px) {
    width: 100%;
  }
`;

const Bold = styled.b`
  color: ${({ valor }) => (!valor ? "#66c7ff" : "#ff7cbe")};
`;

export const AboutMe = () => {
  return (
    <>
      <Main>
        <SectionOne>
          <H2>Sobre Mi 📗</H2>
          <Parraagraph>
            Me llamo <Bold>Facundo Alemandi</Bold>, soy de{" "}
            <Bold> Argentina, Córdoba Capital</Bold> y Me especializo en
            <Bold> Desarrollo Frontend</Bold>. Estudié programación de manera
            autodidacta, comencé con los conceptos básicos <Bold>HTML </Bold>,
            <Bold>CSS</Bold> , Después seguí con
            <Bold> JavaScript</Bold> ,<Bold>Git</Bold> ,<Bold> Github </Bold>y
            actualmente estoy usando <Bold>React</Bold>. Mi objetivo es obtener
            mi primera experiencia laboral como desarrollador Front End.
          </Parraagraph>
        </SectionOne>
      </Main>
    </>
  );
};

export default AboutMe
