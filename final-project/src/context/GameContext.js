import React, { createContext, useState, useEffect } from "react";
import GameAPI from "../api/GameAPI";

export const GameContext = createContext();

export function GameProvider(props) {
  let [data, setData] = useState();

  const fetchData = () => {
    GameAPI.GetGames()
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
    <GameContext.Provider value={{ gameList: data, fetchData: fetchData }}>
      {props.children}
    </GameContext.Provider>
  );
}
