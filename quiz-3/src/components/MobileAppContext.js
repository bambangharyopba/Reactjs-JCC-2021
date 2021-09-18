import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MobileAppContext = createContext();

export function MobileAppProvider(props) {
  let [data, setData] = useState();
  let [editData, setEditData] = useState();

  useEffect(() => {
    fetchData();

    let rtfetch = setInterval(() => fetchData(), 5000);
    return () => {
      clearInterval(rtfetch);
    };
  }, []);

  const fetchData = () => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
      .then((res) => {
        setData(res.data);
      });
  };

  const fetchEditData = (id) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
      .then((res) => {
        setEditData(res.data);
      });
  };

  const setEdit = (id) => {
    fetchEditData(id);
  };

  const clearEdit = () => {
    setEditData(null);
  };

  // Delete data
  const deleteData = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const createData = (data) => {
    axios
      .post(`http://backendexample.sanbercloud.com/api/mobile-apps`, data)
      .then(() => {
        fetchData();
        setEditData(null);
      });
  };

  const updateData = (id, data) => {
    axios
      .patch(
        `http://backendexample.sanbercloud.com/api/mobile-apps/${id}`,
        data
      )
      .then(() => {
        fetchData();
      });
  };

  return (
    <MobileAppContext.Provider
      value={{
        app: data,
        editData: editData,
        deleteApp: deleteData,
        createApp: createData,
        updateApp: updateData,
        editApp: setEdit,
        clearEdit: clearEdit,
      }}
    >
      {props.children}
    </MobileAppContext.Provider>
  );
}

export default MobileAppContext;
