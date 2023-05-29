import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Color from "./components/Color";
import RecCrop from "./components/RecCrop";
import Ccrop from "./components/Ccrop";
import Compress from "./components/Compress";
import Resize from "./components/Resize";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/color" element={<Color />} />
          <Route path="/rcrop" element={<RecCrop />} />
          <Route path="/ccrop" element={<Ccrop />} />
          <Route path="/compress" element={<Compress />} />
          <Route path="/resize" element={<Resize />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
