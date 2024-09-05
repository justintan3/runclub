import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Leaderboard from "./Leaderboard";
import Connect from "./Connect";
import "./pages.css";

const getDate = () => {
  const today = new Date();
  const day = today.toLocaleString("default", { weekday: "long" });
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const date = today.getDate();
  console.log(today);
  return `${day} ${month} ${date}, ${year}`;
};

const Home = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const homeRef = useRef(null);
  const LeaderboardRef = useRef(null);
  const ConnectRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="page" ref={homeRef}>
      <header className="page-header">
        <div className="date">{currentDate}</div>
      </header>
      <div className="progress"></div>
      {/* <div className="nav-panel">
            <Navbar
              homeRef={homeRef}
              LeaderboardRef={LeaderboardRef}
              ConnectRef={ConnectRef}
              handleScroll={handleScroll}
            />
          </div> */}
    </div>
  );
};

export default Home;
