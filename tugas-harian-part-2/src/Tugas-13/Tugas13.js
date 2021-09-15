import React, { useState, useRef, useContext } from "react";
import "./tugas13.css";
import BForm from "./BForm";
import BTable from "./BTable";
import { MahasiswaContext } from "./MahasiswaContext";

function Tugas13() {
  // State
  let { header, mahasiswa, deleteMahasiswa, createMahasiswa, updateMahasiswa } =
    useContext(MahasiswaContext);
  let [edit, setEdit] = useState(false);
  let [editIndex, setEditIndex] = useState(null);

  // Input variable
  var inputName = useRef();
  var inputCourse = useRef();
  var inputScore = useRef();

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
          <button
            onClick={() => handleUpdate(row.id)}
            style={{ backgroundColor: "#6988E7" }}
          >
            edit
          </button>
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
  const generateDataInput = () => {
    let dataInput = [
      { name: "Nama\t:", type: "text", ref: inputName },
      { name: "Mata Kuliah\t:", type: "text", ref: inputCourse },
      { name: "Nilai\t:", type: "number", ref: inputScore },
    ];

    return dataInput;
  };

  // Change edit state true and set editIndex
  const handleUpdate = (index) => {
    setEdit(true);
    setEditIndex(index);
    let d = mahasiswa.find((el) => el.id === index);
    inputName.current.value = d.name;
    inputCourse.current.value = d.course;
    inputScore.current.value = d.score;
  };

  // Delete data
  const handleDelete = (index) => {
    deleteMahasiswa(index);
    resetInput();
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkInput()) {
      alert("Input not valid");
      resetInput();
      return;
    }

    let dataInput = getInput();
    if (edit) {
      updateMahasiswa(editIndex, dataInput);
    } else {
      createMahasiswa(dataInput);
    }
    resetInput();
  };

  // Reset input field value & state
  const resetInput = () => {
    setEdit(false);
    setEditIndex(null);
    inputName.current.value = null;
    inputCourse.current.value = null;
    inputScore.current.value = null;
  };

  // Return input as object
  const getInput = () => {
    return {
      name: inputName.current.value,
      course: inputCourse.current.value,
      score: inputScore.current.value,
    };
  };

  // Input validation
  const checkInput = () => {
    if (!inputName.current.value) return false;
    if (!inputCourse.current.value) return false;
    if (!inputScore.current.value) return false;
    if (inputName.current.value.match(/^$|^\s+|\s$/)) return false;
    if (inputCourse.current.value.match(/^$|^\s+|\s$/)) return false;
    if (inputScore.current.value < 0 || inputScore.current.value > 100)
      return false;

    return true;
  };

  return (
    <div className="tugas-13-wrapper">
      <BTable
        header={header}
        data={readData()}
        index={true}
        title="Daftar Nilai Mahasiswa"
      />
      <BForm
        title="Form Nilai Mahasiswa"
        dataInput={generateDataInput()}
        action={handleSubmit}
      />
    </div>
  );
}

export default Tugas13;
