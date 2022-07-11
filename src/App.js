import { Routes, Route } from "react-router-dom";
import { ThemeMode } from "./Context/themeContext";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <ThemeMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ThemeMode>
    </>
  );
}

export default App;
