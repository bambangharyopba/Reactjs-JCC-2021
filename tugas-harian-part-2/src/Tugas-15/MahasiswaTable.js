import React, { useContext } from "react";
import { Table, Button, message } from "antd";
import { MahasiswaContext2 } from "../Tugas-14/MahasiswaContext2";
import { Link } from "react-router-dom";

function MahasiswaTable() {
  // State
  let { header, mahasiswa, deleteMahasiswa, setEdit } =
    useContext(MahasiswaContext2);
  let dataIndex = ["name", "course", "score", "index", "action"];

  // Read Data
  // Change data from array of object into array of array for Table props
  // every array inside array represent row for table
  const readData = () => {
    if (!mahasiswa) return;
    let d = mahasiswa.map((row, i) => {
      return {
        key: i,
        name: row.name,
        course: row.course,
        score: row.score,
        index: computeScore(row.score),
        action: (
          <>
            <Link to="/Tugas15/form" onClick={() => handleUpdate(row.id)}>
              <Button type="primary">edit</Button>
            </Link>
            <Button type="danger" onClick={() => handleDelete(row.id)}>
              delete
            </Button>
          </>
        ),
      };
    });
    return d;
  };

  const readHeader = () => {
    if (!header) return;
    let h = header.map((title, i) => {
      return {
        title: title,
        dataIndex: dataIndex[i],
        key: dataIndex[i],
      };
    });
    return h;
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
    setEdit(id);
  };

  // Delete data
  const handleDelete = (index) => {
    deleteMahasiswa(index);
    message.success("Data berhasil dihapus");
  };

  return (
    <>
      <Table
        columns={readHeader()}
        dataSource={readData()}
        pagination={{
          defaultPageSize: 8,
        }}
      />
    </>
  );
}

export default MahasiswaTable;
