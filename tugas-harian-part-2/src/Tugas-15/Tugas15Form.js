import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MahasiswaForm from "./MahasiswaForm";
import { MahasiswaContext2 } from "../Tugas-14/MahasiswaContext2";
import { Button } from "antd";
import "./Tugas15Table";

function Tugas15Form() {
  const { setEditData } = useContext(MahasiswaContext2);

  return (
    <div className="tugas-15-wrapper">
      <div>
        <Link to="/Tugas15" onClick={() => setEditData(null)}>
          <Button className="btn-back-form">Back</Button>
        </Link>
      </div>
      <MahasiswaForm />
    </div>
  );
}

export default Tugas15Form;
