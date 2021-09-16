import React from "react";
import "./tugas9.css";
import logo from "../logo.png";

function Card(props) {
  return (
    <div className="card">
      {props.children.map((child, i) => {
        return (
          <div className="child-container" key={i}>
            {child}
          </div>
        );
      })}
    </div>
  );
}

function List(props) {
  let { items } = props;

  return (
    <div className="list">
      {items.map((item, i) => {
        return (
          <div className="litems" key={item.id}>
            <ListItem label={item.label} id={item.id} />
          </div>
        );
      })}
    </div>
  );
}

function ListItem(props) {
  let { label } = props;

  return (
    <label className="litem">
      <input type="checkbox"></input>
      <span className="checkmark"></span>
      <span>{label}</span>
    </label>
  );
}

function Button(props) {
  var { label } = props;

  return (
    <div className="button">
      <p>{label}</p>
    </div>
  );
}

function Tugas9() {
  var items = [
    {
      id: 1,
      label: "Belajar Git & CLI",
    },
    {
      id: 2,
      label: "Belajar HTML & CSS",
    },
    {
      id: 3,
      label: "Belajar Javascript",
    },
    {
      id: 4,
      label: "Belajar ReactJS Dasar",
    },
    {
      id: 5,
      label: "Belajar ReactJS Advance",
    },
  ];

  return (
    <div className="tugas-9-wrapper">
      <Card className="card">
        <div className="img-container">
          <img src={logo} alt="logo" className="App-logo" />
        </div>
        <h2 className="card-title">THINGS TO DO</h2>
        <p className="card-paragraph">During Bootcamp in Jabarcodingcamp</p>
        <List items={items} />
        <Button label="Send" />
      </Card>
    </div>
  );
}

export default Tugas9;
