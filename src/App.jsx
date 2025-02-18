import { Route, Routes } from "react-router-dom";
import "./index.css";
import { About } from "./components/page/about/About";
import { Contact } from "./components/page/contact/Contact";
import { Project } from "./components/page/project/Project";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
}

export default App;
