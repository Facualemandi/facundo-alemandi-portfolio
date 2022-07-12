import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: auto;
  background-color: ${({ valor }) => (!valor ? "rgb(18 26 44)" : "#f7f7f7")};
  transition: 0.5s;
`;
const H2 = styled.h2`
  font-size: 35px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  width: 85vw;
  margin: auto;
  letter-spacing: 3px;
  padding-top: 15px;
  padding-bottom: 10px;
  width: 90vw;
  color: ${({ valor }) => (!valor ? "#5af5ff" : "#ee5ca5;")};
  transition: 0.5s;
  margin-top: 40px;
  margin-bottom: 10px;

  @media (min-width: 1250px) {
    width: 1250px;
  }
`;
const Parragraph = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  width: 90vw;
  margin: auto;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;
  @media (min-width: 1250px) {
    width: 1250px;
  }
`;

const ImgSkills = styled.img`
  width: 50px;
  height: 50px;
`;

const SectionOne = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: rgb(25, 33, 56);
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${({ valor }) => (!valor ? "rgb(25, 33, 56)" : "#d2d3d4")};
  transition: 0.5s;
  @media (min-width: 1250px) {
    width: 1250px;
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
  width: 90vw;
  margin: auto;
  margin-top: 5px;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;

  @media (min-width: 1250px) {
    width: 1250px;
  }
`;

export const StyleSkills = () => {
  return {
    Main,
    H2,
    Parragraph,
    ImgSkills,
    SectionOne,
    ContianerSkills,
    SectionSkillsIcons,
    NameSkill,
    ParragraphFirebase,
  };
};
