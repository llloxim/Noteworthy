import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./gallery";
import Members from "./members";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About showNav={true} />} />
          <Route path="/Gallery" element={<Gallery showNav={true} />} />
          <Route path="/Members" element={<Members showNav={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
