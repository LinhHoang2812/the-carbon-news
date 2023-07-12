import { FaBars, FaHome } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import logo from "../logo.png";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isToggle, setToggle, tabs, selected, setSelected } =
    useGlobalContext();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setToggle(false);
      }
    });
  }, [isToggle]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <img src={logo} className="logo" />
            <h2 className="website-name">The Carbon News</h2>
            <button className="toggle-btn" onClick={() => setToggle(!isToggle)}>
              <FaBars />
            </button>
          </div>

          <div className="carbon-link">
            <HiTrendingUp />
            <NavLink to="dashboard">Carbon Intensity Forecast</NavLink>
          </div>
        </div>
      </div>

      <div
        className={
          isToggle
            ? "nav-button-container show-nav-btn"
            : "nav-button-container"
        }
      >
        {tabs.map((tab) => (
          <button
            className={selected === tab ? "nav-btn selected-btn" : "nav-btn"}
            key={nanoid()}
            onClick={() => setSelected(tab)}
          >
            {tab === "Home" ? <FaHome /> : tab}
          </button>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
