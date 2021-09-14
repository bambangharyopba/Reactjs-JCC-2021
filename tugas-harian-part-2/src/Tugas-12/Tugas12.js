import React, { useState, useRef, useEffect } from "react";
import "./tugas12.css";
import axios from "axios";

function Table(props) {
  // title: table title  (string)
  // header: table header (array of string)
  // data: table cell value (array of array)
  // index: show index (boolean)
  let { title, header, data, index } = props;

  return (
    <div className="bTable">
      <div className="bTable-title">{title && <h1>{title}</h1>}</div>
      <table>
        <thead>
          <tr>
            {index && <th className="num-col">No</th>}
            {header &&
              header.map((head, i) => {
                return <th key={`th-${i}`}>{head}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, i) => {
              return (
                <tr key={`rd-${i}`}>
                  {index && <td className="num-col">{i + 1}</td>}
                  {row.map((value, j) => {
                    return <td key={`cv-${j}`}>{value}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

function Form(props) {
  // title: form title (string)
  // dataInput: data for generating field (array of object with object {name (string), type (string), ref (reference)})
  // action: function to run after submit (function)
  let { title, dataInput, action } = props;

  return (
    <div className="bForm">
      <div className="bForm-title">{title && <h1>{title}</h1>}</div>
      <form onSubmit={action}>
        {dataInput &&
          dataInput.map((data, i) => {
            return (
              <label key={`fi-${i}`}>
                <span>{data.name}</span>
                <input type={data.type} name={data.name} ref={data.ref} />
              </label>
            );
          })}
        <button type="submit" className="bForm-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

function Tugas12() {
  let daftarHeader = ["Nama", "Mata kuliah", "Nilai", "Indeks Nilai", "Aksi"];

  // State
  let [data, setData] = useState();
  let [edit, setEdit] = useState(false);
  let [editIndex, setEditIndex] = useState(null);

  // Input variable
  var inputName = useRef();
  var inputCourse = useRef();
  var inputScore = useRef();

  var fetchData = () => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/student-scores`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData();

    let rtfetch = setInterval(() => fetchData(), 5000);
    return () => {
      clearInterval(rtfetch);
    };
  }, []);

  // Read Data
  // Change data from array of object into array of array for Table props
  // every array inside array represent row for table
  const readData = () => {
    if (!data) return null;
    let d = data.map((row, i) => {
      return [
        row.name,
        row.course,
        row.score,
        computeScore(row.score),
        <>
          <button
            onClick={() => editStateUpdate(row.id)}
            style={{ backgroundColor: "#6988E7" }}
          >
            edit
          </button>
          <button
            onClick={() => deleteData(row.id)}
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
  const editStateUpdate = (index) => {
    setEdit(true);
    setEditIndex(index);
    let d = data.find((el) => el.id === index);
    inputName.current.value = d.name;
    inputCourse.current.value = d.course;
    inputScore.current.value = d.score;
  };

  // Delete data
  const deleteData = (index) => {
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${index}`
      )
      .then(() => {
        fetchData();
        resetInput();
      });
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
      axios
        .patch(
          `http://backendexample.sanbercloud.com/api/student-scores/${editIndex}`,
          dataInput
        )
        .then(() => {
          fetchData();
        });
    } else {
      axios
        .post(
          `http://backendexample.sanbercloud.com/api/student-scores`,
          dataInput
        )
        .then(() => {
          fetchData();
        });
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
    <div className="tugas-12-wrapper">
      <Table
        header={daftarHeader}
        data={readData()}
        index={true}
        title="Daftar Nilai Mahasiswa"
      />
      <Form
        title="Form Nilai Mahasiswa"
        dataInput={generateDataInput()}
        action={handleSubmit}
      />
    </div>
  );
}

export default Tugas12;
