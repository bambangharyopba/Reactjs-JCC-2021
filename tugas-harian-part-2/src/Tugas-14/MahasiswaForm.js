import React, { useRef, useContext, useEffect } from "react";
import BForm from "./BForm";
import { MahasiswaContext2 } from "./MahasiswaContext2";
import { useHistory } from "react-router-dom";

function MahasiswaForm() {
  let { updateMahasiswa, createMahasiswa, editData, setEditData } =
    useContext(MahasiswaContext2);
  const history = useHistory();

  // Input variable
  var inputName = useRef();
  var inputCourse = useRef();
  var inputScore = useRef();

  useEffect(() => {
    if (!editData) return;
    inputName.current.value = editData.name;
    inputCourse.current.value = editData.course;
    inputScore.current.value = editData.score;
  }, [editData]);

  const generateDataInput = () => {
    let dataInput = [
      { name: "Nama\t:", type: "text", ref: inputName },
      { name: "Mata Kuliah\t:", type: "text", ref: inputCourse },
      { name: "Nilai\t:", type: "number", ref: inputScore },
    ];

    return dataInput;
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkInput()) {
      alert("Input not valid");
      return;
    }

    let dataInput = getInput();
    if (editData) {
      updateMahasiswa(editData.id, dataInput);
      setEditData(null);
    } else {
      createMahasiswa(dataInput);
    }
    resetInput();
    history.push("/Tugas14");
  };

  // Reset input field value & state
  const resetInput = () => {
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
    <>
      <BForm
        title="Form Nilai Mahasiswa"
        dataInput={generateDataInput()}
        action={handleSubmit}
      />
    </>
  );
}

export default MahasiswaForm;
