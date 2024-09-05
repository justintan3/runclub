import React from "react";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Connect from "./pages/Connect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
};

export default App;
