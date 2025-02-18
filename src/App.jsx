import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./components/page/home/Home";
import { Contact } from "./components/page/contact/Contact";
import { Project } from "./components/page/project/Project";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
}

export default App;
