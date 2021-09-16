import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MahasiswaContext2 = createContext();

export function MahasiswaProvider2(props) {
  let [data, setData] = useState();
  let header = ["Nama", "Mata kuliah", "Nilai", "Indeks Nilai", "Aksi"];
  let [editData, setEditData] = useState();

  const fetchData = () => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/student-scores`)
      .then((res) => {
        setData(res.data);
      });
  };

  const fetchEditData = (id) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then((res) => {
        setEditData(res.data);
      });
  };

  useEffect(() => {
    fetchData();

    let rtfetch = setInterval(() => fetchData(), 5000);
    return () => {
      clearInterval(rtfetch);
    };
  }, []);

  const setEdit = (id) => {
    fetchEditData(id);
  };

  // Delete data
  const deleteData = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const createData = (data) => {
    axios
      .post(`http://backendexample.sanbercloud.com/api/student-scores`, data)
      .then(() => {
        fetchData();
        setEditData(null);
      });
  };

  const updateData = (id, data) => {
    axios
      .patch(
        `http://backendexample.sanbercloud.com/api/student-scores/${id}`,
        data
      )
      .then(() => {
        fetchData();
      });
  };

  return (
    <MahasiswaContext2.Provider
      value={{
        header: header,
        mahasiswa: data,
        deleteMahasiswa: deleteData,
        createMahasiswa: createData,
        updateMahasiswa: updateData,
        setEdit,
        editData,
        setEditData,
      }}
    >
      {props.children}
    </MahasiswaContext2.Provider>
  );
}
