import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Input } from "antd";

function Navbar() {
  const history = useHistory();

  const handleSearch = (value) => {
    history.push(`/search/${value}`);
  };

  return (
    <div className="topnav">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/mobile-list">
        Mobile List
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <div className="nav-search-container">
        <Input.Search
          onSearch={handleSearch}
          placeholder="Search"
          enterButton
        />
      </div>
    </div>
  );
}

export default Navbar;
