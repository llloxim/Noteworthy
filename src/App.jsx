import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./gallery";
import Members from "./members";
import Nav from "./Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Members" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
