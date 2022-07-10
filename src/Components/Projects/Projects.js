import React from "react";
import styled from "styled-components";
import Technology from "../../Images/Technology.png";
import FakeStoreClothing from "../../Images/fake-store-clothing.png";
import Alfareria from "../../Images/project1.png";
import Countryes from "../../Images/ApiCountry.png";
import MercadoLibre from "../../Images/project3.png";
import { VscDebugBreakpointData } from "react-icons/vsc";
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

const NameProject = styled.p`
  width: 90vw;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  font-weight: bold;
  color: #66c7ff;
`;

const Projects = () => {
  const { theme } = useThemeMode();

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

            <section>
              <ImgOne alt="Technology-Commerce" src={Technology} />
            </section>
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

            <section>
              <ImgOne alt="Technology-Commerce" src={FakeStoreClothing} />
            </section>
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

            <section>
              <ImgOne alt="Technology-Commerce" src={Alfareria} />
            </section>
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

            <section>
              <ImgOne alt="Technology-Commerce" src={Countryes} />
            </section>
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

            <section>
              <ImgOne alt="Technology-Commerce" src={MercadoLibre} />
            </section>
          </SectionOne>
        </ContainerDesktop>
      </Main>
    </>
  );
};

export default Projects;
