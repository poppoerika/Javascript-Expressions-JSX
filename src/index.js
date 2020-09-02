import React from "react";
import ReactDOM from "react-dom";

const name = "Erika Tharp";
const date = new Date();
const currentYear = date.getFullYear();

ReactDOM.render(
  <div>
    <p>{name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
