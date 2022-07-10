import React, { useRef, useState } from "react";
import styled from "styled-components";
import Dark from "../../Images/icon-dark.png";
import Light from "../../Images/LightMode.png";
import { FcContacts } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import Hamburger from "hamburger-react";
import { useThemeMode } from "../../Context/themeContext";

const Nav = styled.nav`
  height: 70px;
  z-index: 500;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(45 56 88);
  max-height: 60px;
  position: fixed;
  bottom: 0px;
`;

const Container = styled.section`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const BtnContact = styled(FcContacts)`
  width: 50px;
  height: 50px;
`;

const IconsMode = styled.img`
  width: 50px;
  height: 50px;
`;

const ContainerMenu = styled.section`
  height: auto;
  width: 100vw;
  background-color: white;
  position: fixed;
  transition: 0.5s;
  bottom: ${({ isOpen }) => (!isOpen ? "-100px" : "59px")};
  background-color: rgb(70 84 126);
`;

const Li = styled.li`
  margin: 7px;
  padding: 7px;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
`;

const Icons = styled(FcAbout)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const Icons1 = styled(FcPhoneAndroid)`
  width: 30px;
  height: 30px;
`;
const Icons2 = styled(FcFlowChart)`
  width: 30px;
  height: 30px;
`;

const MenuBottom = ({ handleAbout, handleSkills, handleProject }) => {
  const [isOpen, setOpen] = useState(false);

  const { changeTheme, theme } = useThemeMode();

  return (
    <>
      <ContainerMenu isOpen={isOpen}>
        <ul>
          <Li onClick={handleSkills}>
            <Icons2 /> Tecnologías
          </Li>

          <Li onClick={handleProject}>
            <Icons1 /> Proyectos
          </Li>
          <Li onClick={handleAbout}>
            <Icons /> Sobre mí
          </Li>
        </ul>
      </ContainerMenu>
      <Nav>
        <Container>
          {theme && <IconsMode alt="Dark" src={Light} onClick={changeTheme} />}
          {!theme && <IconsMode alt="Dark" src={Dark} onClick={changeTheme} />}

          <BtnContact />
          <Hamburger
            size={50}
            rounded
            color="#4FD1C5"
            toggled={isOpen}
            toggle={setOpen}
            easing="ease-in"
          />
        </Container>
      </Nav>
    </>
  );
};

export default MenuBottom;
