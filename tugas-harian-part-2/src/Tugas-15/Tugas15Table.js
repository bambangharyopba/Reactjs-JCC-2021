import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MahasiswaTable from "./MahasiswaTable";
import { MahasiswaContext2 } from "../Tugas-14/MahasiswaContext2";
import { Button } from "antd";
import "./tugas15.css";

function Tugas15Table() {
  const { setEditData } = useContext(MahasiswaContext2);

  return (
    <div className="tugas-15-wrapper">
      <MahasiswaTable />
      <div>
        <Link to="/Tugas15/form" onClick={() => setEditData(null)}>
          <Button className="btn-tambah-mhs">Tambah Mahasiswa</Button>
        </Link>
      </div>
    </div>
  );
}

export default Tugas15Table;
