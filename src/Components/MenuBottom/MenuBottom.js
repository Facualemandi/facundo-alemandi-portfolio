import React, { useState } from "react";
import styled from "styled-components";
import Dark from "../../Images/icon-dark.png";
import Light from "../../Images/LightMode.png";
import { FcContacts } from "react-icons/fc";
import Hamburger from "hamburger-react";

const Nav = styled.nav`
  height: 60px;
  position: fixed;
  bottom: 0px;
  z-index: 500;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(45 56 88);
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

const MenuBottom = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Container>
          <IconsMode alt="Dark" src={Light} />
          {/* <IconsMode alt="Light" src="" /> */}
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
