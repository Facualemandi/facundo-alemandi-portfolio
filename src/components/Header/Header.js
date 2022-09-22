import React from "react";
import styled from "styled-components";
import FacuAlemandi from "../../images/FacuAlemandi.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TheHeader = styled.header`
  height: auto;
  background-color: rgb(16, 23, 29);
`;
const Container = styled.section`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  margin: auto;
  padding: 5px;
  div {
    margin-left: 10px;
  }

  
@media (max-width: 430px){
   flex-direction: column;
   width: 90vw;
}
  @media (min-width: 730px) {
    width: max-content;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1308px) {
    width: 1308px;
  }
`;

const Image = styled.img`
  width: 200px;

  @media (max-width: 430px){
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
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(138, 180, 248);
  width: 100%;
  font-size: 9vw;
  letter-spacing: 2px;

  @media (min-width: 730px) {
    font-size: 70px;
  }
`;

const Position = styled.p`
  font-family: 'Roboto', sans-serif;
  color: rgb(138, 180, 248);
  font-size: 7vw;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 730px) {
    font-size: 70px;
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
`;
const DivIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
`;

const Header = () => {
  return (
    <TheHeader>
      <Container>
        <Image alt="" src={FacuAlemandi} />

        <div>
          <Name>Facundo</Name>
          <Name>Alemandi</Name>
          <Position>Rect Developer</Position>

          <DivIcons>
            <IconGithub />
            <IconLink />
          </DivIcons>
        </div>
      </Container>
    </TheHeader>
  );
};

export default Header;
