import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Iife() {
  const [firstValue, SetFirstValue] = React.useState("");
  const [displayCode, SetDisplayCode] = React.useState(false);
  //IIFE
  const calc = (function () {
    function add(a, b) {
      return a + b;
    }
    function multiply(a, b) {
      return a * b;
    }
    return {
      add: add,
      multi: multiply
    };
  })();

  const addition = calc.add(1, 2);
  const multiply = calc.multi(1, 2);

  const code = ` const calc = (function () {
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
return {
  add: add,
  multi: multiply
};
})();
const addition = calc.add(1, 2)
const multiply = calc.multi(1, 2)
`;

  return (
    <div className="App">
      <h2 style={{ color: "skyblue", border: "1px solid skyblue" }}>
        IIFE(Immediate Invoked function Execution)
      </h2>
      <p style={{ color: "orange", fontWeight: "800" }}>
        {" "}
        As the name Suggest IIFE is a function in javascript which Immediatly
        Invoked and execute as soon as possible.
        <br />
        <span style={{ color: "skyblue" }}>
          Varible declared inside IIFE function connot be accessed by outside
          world. You can avoid global scope from getting poluted.
        </span>
        <br />
        <span style={{ color: "orange" }}>
          So the primary reason to IIFE is to Immediatly execute the code and
          obtain data privacy.
        </span>
      </p>
      <p style={{ color: "skyblue" }}> For Example :- </p>
      <button className="btn" onClick={() => SetDisplayCode(!displayCode)}>
        {!displayCode ? `Show Example` : `Hide Example`}
      </button>
      {displayCode && (
        <div className="Code" style={{ marginTop: "20px" }}>
          <CopyBlock
            language={"go"}
            text={code}
            codeBlock
            theme={dracula}
            showLineNumbers={true}
          />
          <br />
          <br />
          <span style={{ background: "skyblue", color: "#fff" }}>
            {" "}
            Addition :- {addition}{" "}
          </span>
          <br />
          <br />
          <span style={{ background: "skyblue", color: "#fff" }}>
            {" "}
            Multiple :- {multiply}
          </span>
        </div>
      )}
    </div>
  );
}
