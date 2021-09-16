import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import "./navbar.css";

function Navbar() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={"navbar " + mode}>
      <ul>
        <li>
          <NavLink className="nav-item" to="/Tugas9">
            Tugas 9
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/Tugas10">
            Tugas 10
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/Tugas11">
            Tugas 11
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/Tugas12">
            Tugas 12
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/Tugas13">
            Tugas 13
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/Tugas14">
            Tugas 14
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
