import React from "react";
import styled from "styled-components";
import { FcBusinessContact } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const HeaderMe = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: auto;
  padding-top: 30px;
  animation: moveleft 1s ease-in-out;
  background-color: ${({ valor }) => (!valor ? "rgb(25, 33, 56)" : "#e6e7e8")};
  transition: 0.5s;

  @media (min-width: 1000px) {
    margin-top: 60px;
  }
`;

const SectionOne = styled.section`
  display: flex;
  width: 90vw;
  margin: auto;
  animation: moveleft 1s ease-in-out;

  @media (max-width: 365px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1250px) {
    width: 1250px;
  }
`;

const SectionMe = styled.section`
  margin-left: 15px;
`;

const ImgFacundo = styled.img`
  width: 150px;
  height: 20vh;
  border-radius: 15px;
  @media (max-width: 365px) {
    width: 200px;
    height: 23vh;
  }

  @media (min-width: 1000px) {
    width: 300px;
    height: 320px;
  }
`;

const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1.3px;
  width: 170px;
  color: ${({ valor }) => (!valor ? "#beff6b" : "rgb(42, 111, 241);")};
  transition: 0.5s;

  @media (min-width: 1000px) {
    font-size: 65px;
    font-family: "Roboto", sans-serif;
    color: #5ee4e8;
    width: 300px;
  }
`;

const Frontend = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 800;
  margin-top: 10px;
  letter-spacing: 1.5px;
  color: ${({ valor }) => (!valor ? "#beff6b" : "rgb(42, 111, 241);")};
  transition: 0.5s;

  @media (min-width: 1000px) {
    font-family: "Montserrat", sans-serif;
    color: #5ee4e8;
    font-size: 30px;
    font-weight: 300;
  }
`;

const ImgRedes = styled.img`
  width: 25px;
  height: 25px;
`;

const SectionTwo = styled.section`
  display: flex;
  width: 90vw;
  margin: auto;
  animation: moveleft 1s ease-in-out;
  margin-bottom: 15px;
  margin-top: 15px;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const SectionRedes = styled.section`
  width: 150px;
  border-radius: 5px;
  background-color: ${({ valor }) => (!valor ? "rgb(36, 51, 86)" : "#d2d3d4")};
  transition: 0.5s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;

const ButtonContact = styled.button`
  margin-left: 15px;
  width: 200px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3992ff;
  font-family: "Montserrat", sans-serif;
  border-radius: 7px;
  color: white;
  padding: 7px;
`;

const IconContact = styled(FcBusinessContact)`
  margin-left: 10px;
  width: 25px;
  height: 25px;
`;

const ButtomDesktop = styled.button`
  display: none;
  @media (min-width: 1000px) {
    width: 300px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3992ff;
    font-family: "Montserrat", sans-serif;
    border-radius: 7px;
    color: white;
    margin-top: 80px;
    padding: 5px;
    font-weight: bold;
    cursor: pointer;

  }
`;

const GoContact = styled(NavLink)`
  text-decoration: none;
`;

export const StyleHeader = () => {
  return {
    HeaderMe,
    SectionOne,
    SectionMe,
    ImgFacundo,
    Name,
    Frontend,
    ImgRedes,
    SectionTwo,
    SectionRedes,
    ButtonContact,
    IconContact,
    ButtomDesktop,
    GoContact,
  };
};
