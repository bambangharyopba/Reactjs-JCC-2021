import React, { createContext, useState, useEffect } from "react";
import MovieAPI from "../api/MovieAPI";

export const MovieContext = createContext();

export function MovieProvider(props) {
  let [data, setData] = useState();

  useEffect(() => {
    MovieAPI.GetMovies()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MovieContext.Provider value={{ movieList: data }}>
      {props.children}
    </MovieContext.Provider>
  );
}
