import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MahasiswaContext = createContext();

export function MahasiswaProvider(props) {
  const [data, setData] = useState();
  var header = ["Nama", "Mata kuliah", "Nilai", "Indeks Nilai", "Aksi"];

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
    <MahasiswaContext.Provider
      value={{
        header: header,
        mahasiswa: data,
        deleteMahasiswa: deleteData,
        createMahasiswa: createData,
        updateMahasiswa: updateData,
      }}
    >
      {props.children}
    </MahasiswaContext.Provider>
  );
}
