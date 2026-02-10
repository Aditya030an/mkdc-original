import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Work from "./Components/Work";
import Story from "./Components/Story2.jsx";
import Contact from "./Components/Contact";
import SingleProperty from "./Components/SingleProperty";
import Footer from "./Components/Footer";
import Recognition from "./Components/Recognition";

const App = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <div className="mt-16 ">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/work/:id" element={<SingleProperty />} />
        </Routes>
      </div>
      {/* <div className="bg-black">
        <Footer/>
      </div> */}
    </>
  );
};

export default App;
