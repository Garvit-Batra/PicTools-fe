import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Color from "./components/Color";

function App() {
  // const [sessionID, setSessionID] = useState(null);
  // useEffect(() => {
  //   const fetchSessionID = async () => {
  //     try {
  //       const response = await axios.get("/session");
  //       setSessionID(response.data.sessionID);
  //     } catch (error) {
  //       console.error("Failed to fetch session ID:", error);
  //     }
  //   };
  //   fetchSessionID();
  // }, []);
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/color" element={<Color />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
