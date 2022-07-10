import React from "react";
import styled from "styled-components";
import Linkedin from "../../Images/linkedin.png";
import Twitter from "../../Images/Twitter-logo.png";
import GitHub from "../../Images/github.png";

const Nav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100vw;
    height: 60px;
    margin: 0;
    background-color: rgb(28, 39, 67);
    position: fixed;
    top: 0px;
  }
`;

const SectionTwo = styled.section`
  display: flex;
  justify-content: space-between;
  width: 85vw;
  margin: auto;
  animation: moveleft 1s ease-in-out;
  margin-bottom: 15px;
  margin-top: 15px;

  @media (min-width: 800px) {
    width: 65vw;
  }
`;

const SectionRedes = styled.section`
  width: 300px;
  border-radius: 5px;
  background-color: rgb(36, 51, 86);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  max-height: 40px;
`;
const ImgRedes = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  &&:hover {
    box-shadow: 0px 0px 10px 0px rgba(111, 111, 111, 0.698);
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  padding: 10px;
  color: white;
  margin-right: 25px;

  &&:hover {
    border-bottom: 1px solid rgb(78, 93, 156);
    cursor: pointer;
  }
`;

const NavDesktop = () => {
  return (
    <>
      <Nav>
        <SectionTwo>
          <SectionRedes>
            <ImgRedes alt="" src={Linkedin} />
            <ImgRedes alt="" src={Twitter} />
            <ImgRedes alt="" src={GitHub} />
          </SectionRedes>

          <Ul>
            <Li>Skills</Li>
            <Li>About Me</Li>
            <Li>Projects</Li>
          </Ul>
        </SectionTwo>
      </Nav>
    </>
  );
};

export default NavDesktop;
