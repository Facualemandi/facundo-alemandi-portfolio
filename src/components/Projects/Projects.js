import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { MdSlideshow } from "react-icons/md";
import MOVIE from "../../images/Movies.png";
import TECHNOLOGY from "../../images/Technology.png";
import ANIME from "../../images/Anime.png";
import ALFARERIA from "../../images/Alfareria.png";
import AEROLAB from "../../images/Aerolab.png";
import PORTFOLIO from "../../images/Portfolio.png";
import styled from "styled-components";

const theProjects = [
  {
    title: "Todo Peliculas/Seríes",
    img: `${MOVIE}`,
    items: {
      item1: "Consumo de Api con React Query",
      item2: "Hecho para Mobile y Desktop",
      item3: "Api de The movie DB",
      item4: "Hecho con Styled Components",
      item5: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/movies/#/",
    github: "https://github.com/Facualemandi/movies",
  },
  {
    title: "E-commerce de tenología",
    img: `${TECHNOLOGY}`,
    items: {
      item1: "Base de datos con Firebase",
      item2: "Hecho para Mobile y Desktop",
      item3: "Proyecto con Login y Register",
      item4: "Hecho con Styled Components",
      item5: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/technology-commerce/",
    github: "https://github.com/Facualemandi/technology-commerce",
  },
  {
    title: "Página de Animé",
    img: `${ANIME}`,
    items: {
      item1: "Consumo de api de Animes",
      item2: "Hecho para Mobile y Desktop",
      item3: "Hecho con React Query",
      item4: "Hecho con Styled Components",
      item5: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/anime-info/",
    github: "https://github.com/Facualemandi/anime-info",
  },
  {
    title: "E-commerce de alfareria",
    img: `${ALFARERIA}`,
    items: {
      item1: "Base de datos hecha don Firebase",
      item2: "Hecho para Mobile y Desktop",
      item3: "Hecho con Vanilla CSS",
      item4: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/marketplace-alfareria/",
    github: "https://github.com/Facualemandi/marketplace-alfareria",
  },
  {
    title: "Challenge de Aerolab / E-commerce",
    img: `${AEROLAB}`,
    items: {
      item1: "Consumo de Api de Aerolab",
      item2: "Hecho para Mobile y Desktop",
      item3: "Hecho con Styled Components",
      item4: "Hecho con React Query",
    },
    deploy: "https://facualemandi.github.io/fakecommerce/",
    github: "https://github.com/Facualemandi/fakecommerce",
  },
  {
    title: "Portfolio",
    img: `${PORTFOLIO}`,
    items: {
      item1: "Hecho para Mobile y Desktop",
      item2: "Hecho con React",
      item3: "Hecho con Styled Components",
    },
    deploy: "https://facundo-alemandi-portfolio.vercel.app/",
    github: "https://github.com/Facualemandi/facundo-alemandi-portfolio",
  },
];

const ContainerAll = styled.section`
 padding: 10px;
  @media (min-width: 600px) and (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
  }
  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1380px;
    margin: auto;
  }
`;

const Main = styled.main`
  width: 100%;
  background-color: rgb(16, 23, 29);
  padding-top: 30px;
  padding-bottom: 30px;
`;
const ContainerProjects = styled.section`
  color: white;
`;

const Ul = styled.ul`
  padding: 10px;

  li {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }
`;

const Title = styled.p`
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  color: #8ab4f8;
`;

const Project = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #8ab4f8;
  font-size: 45px;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  scroll-margin-top: 60px;
  @media (max-width: 780px) {
    padding: 15px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
  }
`;

const DivOpacity = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 99%;
  padding: 10px;
  border-radius: 20px;
  display: none;
  padding-top: 10%;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    width: max-content;
    margin: 10px auto;
    padding: 5px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
  }
`;
const ContainerImg = styled.div`
  position: relative;
  margin: 10px;

  :hover ${DivOpacity} {
    display: block;
    background-color: rgba(0, 0, 0, 0.83);
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 20px;
`;
const IconGithub = styled(FaGithubSquare)`
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;
const IconDeploy = styled(MdSlideshow)`
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
`;

const Projects = () => {
  return (
    <Main>
      <Project id="proyects">Proyectos 🎬</Project>
      <ContainerAll>
        {theProjects.map((project) => (
          <ContainerProjects key={project.title}>
            <Title>{project.title}</Title>

            <Ul>
              <li>✔ {project.items.item1}</li>
              <li>✔ {project.items.item2}</li>
              <li>✔ {project.items.item3}</li>
              <li>✔ {project.items.item4}</li>
              <li>
                {project.items.item5 ? "✔" : "-"} {project.items.item5}
              </li>
            </Ul>

            <ContainerImg>
              <Img alt={project.title} src={project.img} />
              <DivOpacity>
                <p>
                  <Link
                    href={project.github}
                    rel="noopener noreferrer"
                    target={"_blank"}
                  >
                    {" "}
                    Github <IconGithub />
                  </Link>
                </p>
                <p>
                  <Link
                    href={project.deploy}
                    rel="noopener noreferrer"
                    target={"_blank"}
                  >
                    {" "}
                    Deploy <IconDeploy />
                  </Link>
                </p>
              </DivOpacity>
            </ContainerImg>
          </ContainerProjects>
        ))}
      </ContainerAll>
    </Main>
  );
};

export default Projects;
