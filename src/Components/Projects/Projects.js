import React, { useState } from "react";
import Technology from "../../Images/Technology.png";
import FakeStoreClothing from "../../Images/fake-store-clothing.png";
import Alfareria from "../../Images/project1.png";
import MercadoLibre from "../../Images/project3.png";
import { useThemeMode } from "../../Context/themeContext";
import { StylesProject } from "../../Styles/StylesProject";
import { useDeploy } from "../../Hooks/useDeploy";
import Portfolio from "../../Images/Portfolio.png";
import styled from "styled-components";

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
  LinkToDeploy,
} = StylesProject();

const ProjectName = styled.p`
 font-size: 28px;
 font-family: 'Montserrat', sans-serif;
 color: #66c7ff;
`

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
              <ProjectName>E-Commerce de Tecnología</ProjectName>
              <Li><Point /> Proyecto con Login y Register</Li>
              <Li><Point /> Hecho con React, React router</Li>
              <Li><Point /> Styled Components</Li>
              <Li><Point /> Base de datos hecha con Firebase</Li>
            </Ul>

            <ContainerDeploy onClick={firstProject}>
              <ImgOne alt="Technology-Commerce" src={Technology} />

              <SectionDeploy value={projectOne}>
                <DeployYGithub>
                  <LinkToDeploy
                    href="https://facualemandi.github.io/technology-commerce/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </LinkToDeploy>
                  <LinkToDeploy
                    href=" https://github.com/Facualemandi/technology-commerce"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </LinkToDeploy>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
            <ProjectName>E-Commerce de productos de ropa</ProjectName>
              <Li> <Point /> Proyecto personal </Li>
              <Li> <Point /> Hecho con React, React router </Li>
              <Li>  <Point /> Vanilla Css </Li>
              <Li> <Point /> Base de datos hecha con Firebase </Li>
            </Ul>

            <ContainerDeploy onClick={twoProject}>
              <ImgOne alt="Technology-Commerce" src={FakeStoreClothing} />
              <SectionDeploy value={projectTwo}>
                <DeployYGithub>
                  <LinkToDeploy
                    href="https://facualemandi.github.io/fake-store-clothing/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      {" "}
                      <Icon1 /> Deploy{" "}
                    </GitDeploy>
                  </LinkToDeploy>

                  <LinkToDeploy
                    href="https://github.com/Facualemandi/fake-store-clothing"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </LinkToDeploy>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
            <ProjectName>E-Commerce de productos de alfarería</ProjectName>
              <Li> <Point /> Hecho principalmente para Mobile. </Li>
              <Li> <Point /> Listo para hacer pedidos por WhatsApp </Li>
              <Li> <Point /> Hecho con React, React-router </Li>
              <Li> <Point /> Vanilla Css </Li>
            </Ul>

            <ContainerDeploy onClick={threeProject}>
              <ImgOne alt="Technology-Commerce" src={Alfareria} />

              <SectionDeploy value={projectThree}>
                <DeployYGithub>
                  <LinkToDeploy
                    href="https://facualemandi.github.io/marketplace-alfareria/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </LinkToDeploy>
                  <LinkToDeploy
                    href="https://github.com/Facualemandi/marketplace-alfareria"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </LinkToDeploy>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
            <ProjectName>Mi Portfolio</ProjectName>
              <Li> <Point /> Figma </Li>
              <Li> <Point /> Hecho para Mobile y Desktop </Li>
              <Li> <Point /> Hecho con React, React-router </Li>
              <Li> <Point /> Styled Components </Li>
            </Ul>

            <ContainerDeploy onClick={fourProject}>
              <ImgOne alt="Portfolio" src={Portfolio} />

              <SectionDeploy value={projectFour}>
                <DeployYGithub>
                  <LinkToDeploy
                    href="https://facualemandi.github.io/facundo-alemandi-portfolio/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </LinkToDeploy>
                  <LinkToDeploy
                    href="https://github.com/Facualemandi/facundo-alemandi-portfolio"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </LinkToDeploy>
                </DeployYGithub>
              </SectionDeploy>
            </ContainerDeploy>
          </SectionOne>

          <SectionOne>
            <Ul valor={theme}>
            <ProjectName>Copia de Mercado Libre</ProjectName>
              <Li> <Point /> Hecho con React </Li>
              <Li> <Point /> Vanilla Css </Li>
              <Li> <Point /> Hecho para Mobile y Desktop{" "} </Li>
            </Ul>

            <ContainerDeploy onClick={fiveProject}>
              <ImgOne alt="Technology-Commerce" src={MercadoLibre} />

              <SectionDeploy value={projectFive}>
                <DeployYGithub>
                  <LinkToDeploy
                    href="https://facualemandi.github.io/mercadolibre-dos-copy/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon1 />
                      Deploy
                    </GitDeploy>
                  </LinkToDeploy>
                  <LinkToDeploy
                    href="https://github.com/Facualemandi/mercadolibre-dos-copy"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <GitDeploy>
                      <Icon /> GitHub
                    </GitDeploy>
                  </LinkToDeploy>
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
