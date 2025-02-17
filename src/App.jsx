import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./components/page/home/Home";
import { Contact } from "./components/page/contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
