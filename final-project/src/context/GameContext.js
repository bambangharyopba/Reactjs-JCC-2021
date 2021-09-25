import React, { createContext, useState, useEffect } from "react";
import GameAPI from "../api/GameAPI";

export const GameContext = createContext();

export function GameProvider(props) {
  let [data, setData] = useState();

  useEffect(() => {
    GameAPI.GetGames()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <GameContext.Provider value={{ gameList: data }}>
      {props.children}
    </GameContext.Provider>
  );
}
