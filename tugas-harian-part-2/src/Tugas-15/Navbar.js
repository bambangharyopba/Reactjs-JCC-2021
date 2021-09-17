import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Tugas-14/ThemeContext";
import "./navbar.css";
import { Switch } from "antd";

function Navbar() {
  const { mode, setMode } = useContext(ThemeContext);

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
        <li>
          <NavLink className="nav-item" to="/Tugas15">
            Tugas 15
          </NavLink>
        </li>
        <li className="right">
          <div className="nav-item no-hover">
            <Switch
              className="tgl-theme"
              checkedChildren="Dark"
              unCheckedChildren="Light"
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
              checked={mode === "light" ? false : true}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
