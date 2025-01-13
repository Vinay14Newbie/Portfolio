import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./components/page/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
