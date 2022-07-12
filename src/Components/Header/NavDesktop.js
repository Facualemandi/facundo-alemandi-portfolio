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
    z-index: 100;
  }
`;

const SectionTwo = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: auto;
  animation: moveleft 1s ease-in-out;
  margin-bottom: 15px;
  margin-top: 15px;

  @media (min-width: 1250px) {
    width: 1250px;
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

const LinkGo = styled.a`
  @media (min-width: 1000px) {
    height: max-content;

    height: 25px;
    overflow-y: hidden;

    cursor: pointer;
    &&:hover {
      box-shadow: 0px 0px 10px 0px rgb(0, 0, 0);
      transition: 0.3s;
    }
  }
`;

const NavDesktop = ({ handleAbout, handleSkills, handleProject }) => {
  return (
    <>
      <Nav>
        <SectionTwo>
          <SectionRedes>
            <LinkGo
              href="https://www.linkedin.com/in/facundo-alemandi-4714a7233/"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImgRedes alt="" src={Linkedin} />
            </LinkGo>
            <LinkGo
              href="https://twitter.com/AlemandiFacundo"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImgRedes alt="" src={Twitter} />
            </LinkGo>
            <LinkGo
              href="https://github.com/Facualemandi"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImgRedes alt="" src={GitHub} />
            </LinkGo>
          </SectionRedes>

          <Ul>
            <Li onClick={handleSkills}>Skills</Li>
            <Li onClick={handleAbout}>About Me</Li>
            <Li onClick={handleProject}>Projects</Li>
          </Ul>
        </SectionTwo>
      </Nav>
    </>
  );
};

export default NavDesktop;
