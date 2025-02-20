import { Route, Routes } from "react-router-dom";
import "./index.css";
import { About } from "./components/page/about/About";
import { Contact } from "./components/page/contact/Contact";
import { Project } from "./components/page/project/Project";
import { NotfoundPage } from "./components/molecules/notfoundPage/NotfoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/*" element={<NotfoundPage />} />
    </Routes>
  );
}

export default App;
