import React, { createContext, useState, useEffect } from "react";
import MovieAPI from "../api/MovieAPI";

export const MovieContext = createContext();

export function MovieProvider(props) {
  let [data, setData] = useState();

  const fetchData = () => {
    MovieAPI.GetMovies()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    let rtfetch = setInterval(fetchData, 5000);
    return () => {
      clearInterval(rtfetch);
    };
  }, []);

  return (
    <MovieContext.Provider value={{ movieList: data, fetchData: fetchData }}>
      {props.children}
    </MovieContext.Provider>
  );
}
