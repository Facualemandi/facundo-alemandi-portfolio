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
import { StyleSkills } from "../../Styles/StyleSkills";

const {
  Main,
  H2,
  Parragraph,
  ImgSkills,
  SectionOne,
  ContianerSkills,
  SectionSkillsIcons,
  NameSkill,
  ParragraphFirebase,
} = StyleSkills();

const Skills = ({ isSkills }) => {
  const { theme } = useThemeMode();

  return (
    <>
      <Main valor={theme}>
        <H2 valor={theme} ref={isSkills}>
          Tecnologías 📊
        </H2>
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
