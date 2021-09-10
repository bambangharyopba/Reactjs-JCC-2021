import React, { useState, useEffect, useRef } from "react";
import "./tugas10.css";

function Tugas10() {
  let counterStart = 100;
  let date = new Date();
  let [hour, setHour] = useState(date.getHours());
  let [minute, setMinute] = useState(date.getMinutes());
  let [second, setSecond] = useState(date.getSeconds());
  let [counter, setCounter] = useState(counterStart);
  let [show, setShow] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      let date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
      setCounter((counter) => counter - 1);
      console.log("tick");
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      setShow(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [counter]);

  return show ? (
    <div className="clock">
      <h2>
        Now At - {hour > 12 ? hour - 12 : hour}:
        {minute < 10 ? `0${minute}` : minute}:
        {second < 10 ? `0${second}` : second}
        {hour >= 12 ? " PM" : " AM"}
      </h2>
      <p>Countdown: {counter}</p>
    </div>
  ) : (
    <></>
  );
}

export default Tugas10;
