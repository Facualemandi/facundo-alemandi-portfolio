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
  background-color: #0d141a;
`;

const Skills = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #8ab4f8;
  font-size: 45px;
  padding-top: 30px;
  @media (max-width: 780px) {
    padding: 15px;
  }
  @media (min-width: 780px) {
    width: 780px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1380px) {
    width: 1380px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ContainerAll = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  font-size: 18px;
  font-family: "Roboto", sans-serif;

  @media (min-width: 780px) {
    width: 780px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1380px) {
    width: 1380px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Technology = () => {
  return (
    <>
      <Main>
        <Skills>Tecnologías 📊</Skills>
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
