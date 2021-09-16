import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MahasiswaForm from "./MahasiswaForm";
import { MahasiswaContext2 } from "./MahasiswaContext2";
import "./tugas14.css";

function Tugas14Form() {
  const { setEditData } = useContext(MahasiswaContext2);

  return (
    <div className="tugas-14-wrapper">
      <div>
        <Link to="/Tugas14" onClick={() => setEditData(null)}>
          <button className="btn-back-form">Back</button>
        </Link>
      </div>
      <MahasiswaForm />
    </div>
  );
}

export default Tugas14Form;
