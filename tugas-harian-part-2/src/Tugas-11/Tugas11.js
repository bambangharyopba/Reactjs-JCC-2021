import React, { useState, useRef } from "react";
import "./tugas11.css";

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

function Tugas11() {
  // initial data
  let daftarBuah = [
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
  ];
  let daftarHeader = [
    "Nama",
    "Harga total",
    "Berat Total",
    "Harga per kg",
    "Aksi",
  ];

  // State
  let [dataBuah, setDataBuah] = useState(daftarBuah);
  let [edit, setEdit] = useState(false);
  let [editIndex, setEditIndex] = useState(null);

  // Input variable
  var inputNama = useRef();
  var inputHarga = useRef();
  var inputBerat = useRef();

  // Read Data
  // Change dataBuah from array of object into array of array for Table props
  // every array inside array represent row for table
  const readDataBuah = () => {
    let data = dataBuah.map((row, i) => {
      return [
        row.nama,
        row.hargaTotal,
        `${row.beratTotal / 1000} kg`,
        ((row.hargaTotal * 1000) / row.beratTotal).toFixed(2),
        <>
          <button
            onClick={() => editStateUpdate(i)}
            style={{ backgroundColor: "#6988E7" }}
          >
            edit
          </button>
          <button
            onClick={() => deleteData(i)}
            style={{ background: "#FF5C5C" }}
          >
            delete
          </button>
        </>,
      ];
    });
    return data;
  };

  // Generate Data for Input
  // Return array of object. Every object represent input field
  const generateDataInput = () => {
    if (edit) {
      inputNama.current.value = dataBuah[editIndex].nama;
      inputHarga.current.value = dataBuah[editIndex].hargaTotal;
      inputBerat.current.value = dataBuah[editIndex].beratTotal;
    }

    let dataInput = [
      { name: "Nama", type: "text", ref: inputNama },
      { name: "Harga Total", type: "number", ref: inputHarga },
      { name: "Berat Total (dalam gram)", type: "number", ref: inputBerat },
    ];

    return dataInput;
  };

  // Change edit state true and set editIndex
  const editStateUpdate = (index) => {
    setEdit(true);
    setEditIndex(index);
  };

  // Delete data
  const deleteData = (index) => {
    let newDataBuah = [...dataBuah];
    newDataBuah.splice(index, 1);
    setDataBuah(newDataBuah);
    resetInput();
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkInput()) {
      alert("Input not valid");
      return;
    }

    let buah = getInput();
    if (edit) {
      let newDataBuah = [...dataBuah];
      newDataBuah[editIndex] = buah;
      setDataBuah(newDataBuah);
    } else {
      setDataBuah((dataBuah) => [...dataBuah, buah]);
    }
    resetInput();
  };

  // Reset input field value & state
  const resetInput = () => {
    setEdit(false);
    setEditIndex(null);
    inputNama.current.value = null;
    inputHarga.current.value = null;
    inputBerat.current.value = null;
  };

  // Return input as object
  const getInput = () => {
    return {
      nama: inputNama.current.value,
      hargaTotal: inputHarga.current.value,
      beratTotal: inputBerat.current.value,
    };
  };

  // Input validation
  const checkInput = () => {
    if (!inputNama.current.value) return false;
    if (!inputHarga.current.value) return false;
    if (!inputBerat.current.value) return false;
    if (inputNama.current.value.match(/^$|^\s+|\s$/)) return false;
    if (inputBerat.current.value < 2000) return false;
    if (inputHarga.current.value < 0) return false;

    return true;
  };

  return (
    <div className="tugas-11-wrapper">
      <Table
        header={daftarHeader}
        data={readDataBuah()}
        index={true}
        title="Daftar Harga Buah"
      />
      <Form
        title="Form Daftar Harga Buah"
        dataInput={generateDataInput()}
        action={handleSubmit}
      />
    </div>
  );
}

export default Tugas11;
