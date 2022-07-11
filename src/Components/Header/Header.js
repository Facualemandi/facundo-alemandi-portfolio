import React from "react";
import Facundo from "../../Images/FacundoAlemandi.png";
import Linkedin from "../../Images/linkedin.png";
import Twitter from "../../Images/Twitter-logo.png";
import GitHub from "../../Images/github.png";
import NavDesktop from "./NavDesktop";
import { useThemeMode } from "../../Context/themeContext";
import { StyleHeader } from "../../Styles/StyleHeader";

const {
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
} = StyleHeader();

const Header = ({ handleAbout, handleSkills, handleProject }) => {
  const { theme } = useThemeMode();

  return (
    <>
      <NavDesktop
        handleAbout={handleAbout}
        handleProject={handleProject}
        handleSkills={handleSkills}
      />

      <HeaderMe valor={theme}>
        <SectionOne>
          <ImgFacundo alt="" src={Facundo} />
          <SectionMe>
            <Name valor={theme}>Facundo Alemandi</Name>
            <Frontend valor={theme}>Frontend Developer</Frontend>
            <GoContact to={"/Contact"}>
              <ButtomDesktop>
                Contactarme <IconContact />
              </ButtomDesktop>
            </GoContact>
          </SectionMe>
        </SectionOne>

        <SectionTwo>
          <SectionRedes valor={theme}>
            <a
              href="https://www.linkedin.com/in/facundo-alemandi-4714a7233/"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImgRedes alt="" src={Linkedin} />
            </a>
            <a
              href="https://twitter.com/AlemandiFacundo"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImgRedes
                alt="https://twitter.com/AlemandiFacundo"
                src={Twitter}
              />
            </a>
            <a
              href="https://github.com/Facualemandi"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImgRedes alt="Github" src={GitHub} />
            </a>
          </SectionRedes>

          <GoContact to="/Contact">
            <ButtonContact>
              Contactarme <IconContact />
            </ButtonContact>
          </GoContact>
        </SectionTwo>
      </HeaderMe>
    </>
  );
};

export default Header;
