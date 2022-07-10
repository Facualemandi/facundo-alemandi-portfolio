import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: auto;
  background-color: rgb(18 26 44);
`;

const SectionOne = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 15px;
`;

const H2 = styled.h2`
  font-size: 28px;
  color: #5af5ff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  width: 85vw;
  margin: auto;
  letter-spacing: 3px;

  @media (min-width: 800px) {
    width: 65vw;
  }
`;

const Parraagraph = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: white;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: auto;
  margin-top: 15px;
  width: 85vw;
  @media (min-width: 800px) {
    width: 65vw;
  }
`;
const Bold = styled.b`
  color: #66c7ff;
`;

export const AboutMe = () => {
  return (
    <>
      <Main>
        <SectionOne>
          <H2>Sobre Mi 📗</H2>
          <Parraagraph>
            Me llamo <Bold>Facundo Alemandi</Bold>, soy de{" "}
            <Bold>Argentina, Córdoba Capital</Bold> y Me especializo en{" "}
            <Bold>Desarrollo Frontend</Bold>. A finales de 2021 (1 de diciembre)
            empecé a aprender programación. Comencé con los conceptos básicos{" "}
            <Bold>HTML</Bold>, <Bold>CSS</Bold>, Después seguí con{" "}
            <Bold>JavaScript</Bold>, <Bold>Git</Bold>,<Bold> Github </Bold>y
            actualmente estoy usando <Bold>React</Bold>. Mi objetivo es obtener
            mi primera experiencia laboral como desarrollador Front End.
          </Parraagraph>
        </SectionOne>
      </Main>
    </>
  );
};
