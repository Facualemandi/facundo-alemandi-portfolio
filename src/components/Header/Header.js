import React from "react";
import styled from "styled-components";
import FacuAlemandi from "../../images/FacuAlemandi.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TheHeader = styled.header`
  height: auto;
  background-color: rgb(16, 23, 29);
  padding-top: 65px;
`;
const Container = styled.section`
  width: 100%;
  display: flex;
  margin: auto;
  padding: 10px;

  @media (max-width: 430px) {
    flex-direction: column;
    width: 100vw;
  }
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

const Image = styled.img`
  width: 200px;
  border-radius: 15px;

  @media (max-width: 430px) {
    width: 90vw;
    margin: auto;
    padding: 25px;
    border-radius: 10px;
  }

  @media (min-width: 730px) {
    width: 270px;
  }
`;

const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(138, 180, 248);
  width: 100%;
  font-size: 9vw;
  letter-spacing: 2px;

  @media (max-width: 430px) {
    font-size: 55px;
  }

  @media (min-width: 730px) {
    font-size: 70px;
  }
`;

const Position = styled.p`
  font-family: "Roboto", sans-serif;
  color: rgb(138, 180, 248);
  font-size: 7vw;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 730px) {
    font-size: 60px;
  }
`;

const IconGithub = styled(FaGithubSquare)`
  color: rgb(138, 180, 248);
  width: 50px;
  height: 50px;
`;
const IconLink = styled(FaLinkedin)`
  color: rgb(138, 180, 248);
  width: 50px;
  height: 50px;
  margin-left: 30px;
`;
const DivIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SectionHeader = styled.section`
  @media (max-width: 430px) {
    margin-left: 0;
    padding: 10px;
  }
    margin-left: 15px;
`;

const Header = () => {
  return (
    <TheHeader>
      <Container>
        <Image alt="" src={FacuAlemandi} />

        <SectionHeader>
          <Name>Facundo</Name>
          <Name>Alemandi</Name>
          <Position>React Developer</Position>

          <DivIcons>
            <a href="https://github.com/Facualemandi" target={'_blank'} rel='noreferrer'> <IconGithub /></a>
            <a href="https://www.linkedin.com/in/facundo-alemandi-4714a7233/" target={'_blank'} rel='noreferrer'><IconLink /></a>
          </DivIcons>
        </SectionHeader>
      </Container>
    </TheHeader>
  );
};

export default Header;
