import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  let [mode, setMode] = useState("light");
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
