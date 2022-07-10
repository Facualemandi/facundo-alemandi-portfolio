import { AboutMe } from "./Components/AboutMe/AboutMe";
import Header from "./Components/Header/Header";
import MenuBottom from "./Components/MenuBottom/MenuBottom";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <MenuBottom/>
    </>
  );
}

export default App;
