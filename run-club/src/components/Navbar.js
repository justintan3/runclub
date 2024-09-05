import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  handleScroll,
  homeRef,
  LeaderboardRef,
  ConnectRef,
  contactRef,
}) => {
  return (
    <div className="nav">
      <ul className="nav-menu">
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(LeaderboardRef.current);
            }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(ConnectRef.current);
            }}
          >
            EXPERIENCES
          </Link>
        </li>
      </ul>
    </div>
    // <>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     <Route path="/about" element={<About />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </>
  );
};
export default Navbar;
