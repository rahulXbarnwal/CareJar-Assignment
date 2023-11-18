import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/doctors/:category" element={<Section2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
