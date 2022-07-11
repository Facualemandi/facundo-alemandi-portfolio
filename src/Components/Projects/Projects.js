import React, { useState } from "react";
import styled from "styled-components";
import Technology from "../../Images/Technology.png";
import FakeStoreClothing from "../../Images/fake-store-clothing.png";
import Alfareria from "../../Images/project1.png";
import Countryes from "../../Images/ApiCountry.png";
import MercadoLibre from "../../Images/project3.png";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FcClapperboard } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { useThemeMode } from "../../Context/themeContext";

const Main = styled.main`
  height: auto;
  background-color: ${({ valor }) => (!valor ? "rgb(18 26 44)" : "#f7f7f7")};
  transition: 0.5s;
  padding-bottom: 65px;
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
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(68, 68, 68, 0.393);
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

const Projects = () => {
  const { theme } = useThemeMode();
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

  return (
    <>
      <Main valor={theme}>
        <H2 valor={theme}> Proyectos 📚</H2>

        <ContainerDesktop>
          <SectionOne>
            <Ul valor={theme}>
              <Li>
                <Point /> E-Commerce
              </Li>
              <Li>
                <Point /> Proyecto con Login y Register
              </Li>
              <Li>
                <Point /> Hecho con React, React router
              </Li>
              <Li>
                <Point /> Styled Components
              </Li>
              <Li>
                <Point /> Base de datos hecha con Firebase
              </Li>
            </Ul>

            <ContainerDeploy onClick={firstProject}>
              <ImgOne alt="Technology-Commerce" src={Technology} />

              <SectionDeploy value={projectOne}>
                <DeployYGithub>
                  <a
                    href="https://facualemandi.github.io/technology-commerce/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </a>
                  <a
                    href=" https://github.com/Facualemandi/technology-commerce"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </a>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
              <Li>
                <Point /> E-Commerce
              </Li>
              <Li>
                <Point /> Proyecto personal
              </Li>
              <Li>
                <Point /> Hecho con React, React router
              </Li>
              <Li>
                <Point /> Vanilla Css
              </Li>
              <Li>
                <Point /> Base de datos hecha con Firebase
              </Li>
            </Ul>

            <ContainerDeploy onClick={twoProject}>
              <ImgOne alt="Technology-Commerce" src={FakeStoreClothing} />

              <SectionDeploy value={projectTwo}>
                <DeployYGithub>
                  <a
                    href="https://facualemandi.github.io/fake-store-clothing/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </a>

                  <a
                    href="https://github.com/Facualemandi/fake-store-clothing"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </a>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
              <Li>
                <Point /> Proyecto personal
              </Li>
              <Li>
                <Point /> Hecho principalmente para Mobile.
              </Li>
              <Li>
                <Point /> Listo para hacer pedidos por WhatsApp
              </Li>
              <Li>
                <Point /> Hecho con React, React-router
              </Li>
              <Li>
                <Point /> Vanilla Css
              </Li>
            </Ul>

            <ContainerDeploy onClick={threeProject}>
              <ImgOne alt="Technology-Commerce" src={Alfareria} />

              <SectionDeploy value={projectThree}>
                <DeployYGithub>
                  <a
                    href="https://facualemandi.github.io/marketplace-alfareria/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </a>
                  <a
                    href="https://github.com/Facualemandi/marketplace-alfareria"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </a>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
              <Li>
                <Point /> Buscador de países
              </Li>
              <Li>
                <Point /> Consumo Api con Fetch
              </Li>
              <Li>
                <Point /> Hecho para Mobile y Desktop
              </Li>
              <Li>
                <Point /> Hecho con React, React-router
              </Li>
              <Li>
                <Point /> Vanilla Css
              </Li>
            </Ul>

            <ContainerDeploy onClick={fourProject}>
              <ImgOne alt="Technology-Commerce" src={Countryes} />

              <SectionDeploy value={projectFour}>
                <DeployYGithub>
                  <a
                    href="https://facualemandi.github.io/api-country/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </a>
                  <a
                    href="https://github.com/Facualemandi/api-country"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </a>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
              <Li>
                <Point /> Copia de Mercado Libre
              </Li>
              <Li>
                <Point /> Hecho con React
              </Li>
              <Li>
                <Point /> Vanilla Css
              </Li>
              <Li>
                <Point /> Hecho para Mobile y Desktop
              </Li>
              <Li>
                <Point />
              </Li>
            </Ul>

            <ContainerDeploy onClick={fiveProject}>
              <ImgOne alt="Technology-Commerce" src={MercadoLibre} />

              <SectionDeploy value={projectFive}>
                <DeployYGithub>
                  <a
                    href="https://facualemandi.github.io/mercadolibre-dos-copy/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </a>
                  <a
                    href="https://github.com/Facualemandi/mercadolibre-dos-copy"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </a>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>
        </ContainerDesktop>
      </Main>
    </>
  );
};

export default Projects;
