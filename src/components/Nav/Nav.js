import React, { useState } from "react";
import styled from "styled-components";
import { Fade as Hamburger } from "hamburger-react";

const TheNav = styled.nav`
  height: auto;
  display: flex;
  position: fixed;
  min-height: 60px;
  width: 100vw;
  background-color: rgb(34, 54, 88);
  z-index: 5000;
  @media (max-width: 781px) {
    justify-content: flex-end;
  }
  @media (min-width: 781px) {
    display: flex;
    justify-content: center;
  }
  section {
    z-index: 1500;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 781px) {
      display: none;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  @media (max-width: 780px) {
    transform: ${({ value }) =>
      value ? " translateY(60px)" : "translateY(-100%)"};
    transition: 0.5s;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100vw;
    z-index: 1000;
    background-color: rgb(34, 54, 88);
  }
  @media (min-width: 781px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
  }

  li {
    color: white;
    margin: 10px;
    padding: 10px;
    background-color: rgb(40, 61, 96);
    border-radius: 5px;
    @media (min-width: 780px) {
      cursor: pointer;
      :hover {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.65);
        transition: 0.3s;
      }
    }
  }
`;
const Link = styled.a`
text-decoration: none;
`

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <TheNav>
        <section>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#4FD1C5"
            size={50}
          />
        </section>

        <Ul value={isOpen}>
          <Link href="#aboutme"><li>Sobre mi</li></Link>
          <Link href="#technology"><li>Tecnologías</li></Link>
          <Link href="#proyects"><li>Proyectos</li></Link>
        </Ul>

      </TheNav>
    </>
  );
};

export default Nav;
