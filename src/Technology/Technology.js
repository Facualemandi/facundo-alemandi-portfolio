import React from "react";
import HTML from "../images/HTML.png";
import CSS from "../images/CSS.svg";
import JS from "../images/JS.png";
import REACT from "../images/REACT.png";
import GIT from "../images/GIT.png";
import GITHUB from "../images/GITHUB.png";
import STYLEDCOMPONENTS from "../images/STYLED-COMPONENTS.png";
import REACTQUERY from "../images/REACT-QUERY.png";
import styled from "styled-components";

const tecnlogi = [
  { name: "Html", img: `${HTML}` },
  { name: "Css", img: `${CSS}` },
  { name: "JavaScript", img: `${JS}` },
  { name: "React", img: `${REACT}` },
  { name: "Git", img: `${GIT}` },
  { name: "GitHub", img: `${GITHUB}` },
  { name: "Styled-Components", img: `${STYLEDCOMPONENTS}` },
  { name: "React-Query", img: `${REACTQUERY}` },
];

const Img = styled.img`
  width: 70px;
  height: 70px;
`;

const Main = styled.main`
  background-color: rgb(16, 23, 29);
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  background-color: #1d2a34;
`;

const Skills = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #8ab4f8;
  font-size: 45px;
  scroll-margin-top: 60px;
  padding-top: 30px;
    padding: 10px;
  @media (min-width: 780px) {
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    max-width: 1380px;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
  }
`;

const ContainerAll = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  
  @media (min-width: 780px) {
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    max-width: 1380px;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
  }
`;

const Technology = () => {
  return (
    <>
      <Main>
        <Skills id="technology">Tecnologías 📊</Skills>
        <ContainerAll>
          {tecnlogi.map((item) => (
            <Container key={item.name}>
              <Img alt={item.name} src={item.img} />
              <p>{item.name}</p>
            </Container>
          ))}
        </ContainerAll>
      </Main>
    </>
  );
};

export default Technology;
