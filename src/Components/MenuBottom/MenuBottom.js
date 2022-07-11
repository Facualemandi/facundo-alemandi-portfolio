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
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  height: 70px;
  z-index: 500;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ valor }) => (!valor ? "rgb(70 84 126)" : "#d2d3d4")};
  transition: 0.5s;
  max-height: 60px;
  position: fixed;
  bottom: 0px;

  @media (min-width: 1000px) {
    display: none;
  }
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
  background-color: ${({ valor }) => (!valor ? "rgb(30, 45, 78)" : "#959696")};
  transition: 0.5s;

  @media (min-width: 1000px) {
    display: none;
  }
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
      <ContainerMenu isOpen={isOpen} valor={theme}>
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
      <Nav valor={theme}>
        <Container>
          {theme && <IconsMode alt="Dark" src={Light} onClick={changeTheme} />}
          {!theme && <IconsMode alt="Dark" src={Dark} onClick={changeTheme} />}

          <NavLink to={"/Contact"}>
            <BtnContact />
          </NavLink>

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
