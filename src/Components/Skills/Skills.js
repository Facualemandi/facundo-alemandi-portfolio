import React from "react";
import styled from "styled-components";
import Css from "../../Images/css.png";
import Html from "../../Images/html.png";
import Javascript from "../../Images/javascript.png";
import IsReact from "../../Images/react.png";
import Github from "../../Images/github.png";
import Git from "../../Images/git-icon.png";
import StyledC from "../../Images/StyledC.png";
import { useThemeMode } from "../../Context/themeContext";

const Main = styled.main`
  height: auto;
  background-color: ${({ valor }) => (!valor ? "rgb(18 26 44)" : "#f7f7f7")};
  transition: 0.5s;
`;
const H2 = styled.h2`
  font-size: 26px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  width: 85vw;
  margin: auto;
  letter-spacing: 3px;
  padding-top: 15px;
  padding-bottom: 10px;
  width: 85vw;
  color: ${({ valor }) => (!valor ? "#5af5ff" : "#ee5ca5;")};
  transition: 0.5s;

  @media (min-width: 800px) {
    width: 65vw;
  }
`;
const Parragraph = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  width: 85vw;
  margin: auto;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;

  @media (min-width: 800px) {
    width: 65vw;
  }
`;

const ImgSkills = styled.img`
  width: 50px;
  height: 50px;
`;

const SectionOne = styled.section`
  width: 85vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: rgb(25, 33, 56);
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${({ valor }) => (!valor ? "rgb(25, 33, 56)" : "#d2d3d4")};
  transition: 0.5s;
  @media (min-width: 800px) {
    width: 65vw;
  }
`;

const ContianerSkills = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
`;

const SectionSkillsIcons = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameSkill = styled.p`
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;
`;

const ParragraphFirebase = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  width: 85vw;
  margin: auto;
  margin-top: 5px;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;

  @media (min-width: 800px) {
    width: 65vw;
  }
`;

const Skills = ({isSkills}) => {
  const { theme } = useThemeMode();

  return (
    <>
      <Main valor={theme}>
        <H2 valor={theme} ref={isSkills}>Tecnologías 📊</H2>
        <Parragraph valor={theme}>
          Actualmente las tecnologías que manejo son :
        </Parragraph>

        <SectionOne valor={theme}>
          <ContianerSkills>
            <SectionSkillsIcons>
              <ImgSkills alt="Html" src={Html} />
              <NameSkill valor={theme}>Html</NameSkill>
            </SectionSkillsIcons>
            <SectionSkillsIcons>
              <ImgSkills alt="Css" src={Css} />
              <NameSkill valor={theme}>Css</NameSkill>
            </SectionSkillsIcons>
            <SectionSkillsIcons>
              <ImgSkills alt="Javascript" src={Javascript} />
              <NameSkill valor={theme}>Javascript</NameSkill>
            </SectionSkillsIcons>
            <SectionSkillsIcons>
              <ImgSkills alt="IsReact" src={IsReact} />
              <NameSkill valor={theme}>React</NameSkill>
            </SectionSkillsIcons>
          </ContianerSkills>

          <ContianerSkills>
            <SectionSkillsIcons>
              <ImgSkills alt="Github" src={Github} />
              <NameSkill valor={theme}>GitHub</NameSkill>
            </SectionSkillsIcons>
            <SectionSkillsIcons>
              <ImgSkills alt="StyledC" src={StyledC} />
              <NameSkill valor={theme}>Styled-C</NameSkill>
            </SectionSkillsIcons>
            <SectionSkillsIcons>
              <ImgSkills alt="Git" src={Git} />
              <NameSkill valor={theme}>Git</NameSkill>
            </SectionSkillsIcons>
          </ContianerSkills>
        </SectionOne>
        <ParragraphFirebase valor={theme}>
          (Tengo conocimiento en Firebase)
        </ParragraphFirebase>
      </Main>
    </>
  );
};

export default Skills;
