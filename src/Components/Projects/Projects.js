import React, { useState } from "react";
import Technology from "../../Images/Technology.png";
import FakeStoreClothing from "../../Images/fake-store-clothing.png";
import Alfareria from "../../Images/project1.png";
import Countryes from "../../Images/ApiCountry.png";
import MercadoLibre from "../../Images/project3.png";
import { useThemeMode } from "../../Context/themeContext";
import { StylesProject } from "../../Styles/StylesProject";
import { useDeploy } from "../../Hooks/useDeploy";

const {
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
} = StylesProject();

const Projects = ({ isProjects }) => {
  const { theme } = useThemeMode();
  const {
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
  } = useDeploy();

  return (
    <>
      <Main valor={theme}>
        <H2 valor={theme} ref={isProjects}>
          Proyectos 📚
        </H2>

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
              <Li><Point /> E-Commerce </Li>
              <Li><Point /> Proyecto personal</Li>
              <Li><Point /> Hecho con React, React router</Li>
              <Li><Point /> Vanilla Css</Li>
              <Li><Point /> Base de datos hecha con Firebase</Li>
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
                    <GitDeploy> <Icon1 /> Deploy  </GitDeploy>
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
              <Li> <Point /> Proyecto personal </Li>
              <Li> <Point /> Hecho principalmente para Mobile. </Li>
              <Li> <Point /> Listo para hacer pedidos por WhatsApp </Li>
              <Li> <Point /> Hecho con React, React-router </Li>
              <Li> <Point /> Vanilla Css </Li>
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
              <Li> <Point /> Buscador de países </Li>
              <Li> <Point /> Consumo Api con Fetch </Li>
              <Li> <Point /> Hecho para Mobile y Desktop </Li>
              <Li> <Point /> Hecho con React, React-router </Li>
              <Li> <Point /> Vanilla Css </Li>
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
              <Li> <Point /> Copia de Mercado Libre </Li>
              <Li> <Point /> Hecho con React </Li>
              <Li> <Point /> Vanilla Css </Li>
              <Li> <Point /> Hecho para Mobile y Desktop </Li>
              <Li> <Point /> </Li>
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
