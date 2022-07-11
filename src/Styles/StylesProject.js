import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FcClapperboard } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";

const Main = styled.main`
  height: auto;
  background-color: ${({ valor }) => (!valor ? "rgb(18 26 44)" : "#f7f7f7")};
  transition: 0.5s;
  padding-bottom: 65px;
  z-index: 50;
`;
const H2 = styled.p`
  color: ${({ valor }) => (!valor ? "#5af5ff" : "#ee5ca5;")};
  transition: 0.5s;
  font-size: 26px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin: auto;
  letter-spacing: 3px;
  padding-bottom: 15px;
  transition: 1s;
  width: 85vw;
  padding-top: 20px;

  @media (min-width: 800px) {
    width: 65vw;
  }
`;

const SectionOne = styled.section`
  width: 85vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;

  @media (min-width: 800px) {
    width: 65vw;
  }

  @media (min-width: 1000px) {
    width: max-content;
    padding: 10px;
  }
`;

const Ul = styled.ul`
  margin-bottom: 15px;
  color: ${({ valor }) => (!valor ? "white" : "black")};
  transition: 0.5s;
`;

const Li = styled.li`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin-top: 10px;
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;

const ImgOne = styled.img`
  width: 85vw;
  height: 400px;
  border-radius: 10px;

  @media (min-width: 800px) {
    width: 65vw;
    height: 500px;
  }

  @media (min-width: 1150px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 1350px) {
    width: 430px;
    height: 430px;
  }
  @media (min-width: 1500px) {
    width: 35vw;
    height: 450px;
  }
`;

const Point = styled(VscDebugBreakpointData)`
  color: lightblue;
  margin-right: 5px;
`;

const ContainerDesktop = styled.section`
  @media (min-width: 1150px) {
    width: 75vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContainerDeploy = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  @media (min-width: 800px) {
    width: 65vw;
  }

  @media (min-width: 1000px) {
    width: max-content;
    cursor: pointer;
  }
`;

const SectionDeploy = styled.section`
  border-radius: 10px;
  position: absolute;
  top: 0px;
  height: 100%;
  width: 94.5%;
  background-color: rgba(0, 0, 0, 0.549);
  display: ${({ value }) => (!value ? "none" : "block")};
  @media (min-width: 800px) {
    width: 65vw;
    height: 500px;
  }
  @media (min-width: 1150px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 1350px) {
    width: 430px;
    height: 430px;
  }
  @media (min-width: 1500px) {
    width: 35vw;
    height: 450px;
  }
`;

const GitDeploy = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  padding: 5px;
  letter-spacing: 1px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.705);
  margin-top: 10px;
  width: max-content;
`;

const Icon = styled(FaGithubSquare)`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  color: white;
`;
const Icon1 = styled(FcClapperboard)`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const DeployYGithub = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkToDeploy = styled.a`
  text-decoration: none;
`;
export const StylesProject = () => {
  return {
    Main,
    H2,
    SectionOne,
    Ul,
    Li,
    ImgOne,
    Point,
    ContainerDesktop,
    ContainerDeploy,
    SectionDeploy,
    GitDeploy,
    Icon,
    Icon1,
    DeployYGithub,
    LinkToDeploy
  };
};
