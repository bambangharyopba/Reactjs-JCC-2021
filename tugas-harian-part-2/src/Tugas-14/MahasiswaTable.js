import React, { useContext } from "react";
import BTable from "./BTable";
import { MahasiswaContext2 } from "./MahasiswaContext2";
import { Link } from "react-router-dom";

function MahasiswaTable() {
  // State
  let { header, mahasiswa, deleteMahasiswa, setEdit } =
    useContext(MahasiswaContext2);

  // Read Data
  // Change data from array of object into array of array for Table props
  // every array inside array represent row for table
  const readData = () => {
    if (!mahasiswa) return null;
    let d = mahasiswa.map((row, i) => {
      return [
        row.name,
        row.course,
        row.score,
        computeScore(row.score),
        <>
          <Link to="/Tugas14/form" onClick={() => handleUpdate(row.id)}>
            <button style={{ backgroundColor: "#6988E7" }}>edit</button>
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            style={{ background: "#FF5C5C" }}
          >
            delete
          </button>
        </>,
      ];
    });
    return d;
  };

  const computeScore = (score) => {
    if (score >= 80) {
      return "A";
    } else if (score >= 70) {
      return "B";
    } else if (score >= 60) {
      return "C";
    } else if (score >= 50) {
      return "D";
    } else {
      return "E";
    }
  };

  // Generate Data for Input
  // Return array of object. Every object represent input field

  // Change edit state true and set editIndex
  const handleUpdate = (id) => {
    // console.log("asdop");
    // setEdit(true, id);
    setEdit(id);
  };

  // Delete data
  const handleDelete = (index) => {
    deleteMahasiswa(index);
  };

  return (
    <>
      <BTable
        header={header}
        data={readData()}
        index={true}
        title="Daftar Nilai Mahasiswa"
      />
    </>
  );
}

export default MahasiswaTable;
