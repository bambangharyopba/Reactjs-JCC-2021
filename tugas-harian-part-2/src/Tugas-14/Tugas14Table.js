import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MahasiswaTable from "./MahasiswaTable";
import { MahasiswaContext2 } from "./MahasiswaContext2";
import { ThemeContext } from "./ThemeContext";
import "./tugas14.css";

function Tugas14Table() {
  const { setEditData } = useContext(MahasiswaContext2);
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <div className="tugas-14-wrapper">
      <button
        className={"btn-chg-theme " + mode}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        Change Navbar to {mode === "light" ? "Dark" : "Light"} Theme
      </button>
      <MahasiswaTable />
      <div>
        <Link to="/Tugas14/form" onClick={() => setEditData(null)}>
          <button className="btn-tambah-mhs">Tambah Mahasiswa</button>
        </Link>
      </div>
    </div>
  );
}

export default Tugas14Table;
