import React from "react";
import logo from "../Assets/tcblogo.jpg";
import Style from "../Stylesheets/Navbar.module.css";
import {Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import Ham from "./Ham";

const NavBar = () => {
  const breakPoint = 1000;

  return (
    <header className={Style.header}>
      <div className={Style.headContent}>
        <div className={Style.logoCont}>
          <div className={Style.logo}>
            <img src={logo} alt="tcblogo" />
            <Link className={Style.img_text} to={"/"}> TheCodeBreakers </Link>
          </div>
        </div>

        <MediaQuery minWidth={breakPoint}>
          <nav className={Style.visibleOnLargeScreen}>
            <ul className={Style.list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? Style.active : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? Style.active : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/achievements"
                  className={({ isActive }) => (isActive ? Style.active : "")}
                >
                  Achievements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) => (isActive ? Style.active : "")}
                >
                  Events
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) => (isActive ? Style.active : "")}
                >
                  Resources
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </MediaQuery>

        <MediaQuery maxWidth={breakPoint}>
          <Ham />
        </MediaQuery>
      </div>
    </header>
  );
};

export default NavBar;
