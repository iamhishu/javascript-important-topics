import React from "react";
import "./styles.css";

import { CopyBlock, dracula } from "react-code-blocks";

export default function Callbacks() {
  const [displayCode, SetDisplayCode] = React.useState(false);
  const callbackSnippet = `function greeting(name) {
    alert('Hello ' + name);
  }

  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }

  processUserInput(greeting);
  `;

  const callbackSnippetTwo = ` 
  // add() function is called with arguments a, b
  // and callback, callback will be executed just 
  // after ending of add() function
  function add(a, b , callback){ document.write(The sum of '{a}' and '{b}' is '{a+b}'. +"<br>"); callback();
  }
    
  // disp() function is called just
  // after the ending of add() function 
  function disp(){
  document.write('This must be printed after addition');
  }
    
  // Calling add() function
  add(5,6,disp); `;

  return (
    <div className="App" style={{ background: "#efefef", color: "#525252" }}>
      <h2 style={{ color: "skyblue", border: "1px solid skyblue" }}>
        Callbacks
      </h2>
      <p style={{ color: "orange", fontWeight: "800" }}>
        {" "}
        A Callback is a function passed as an argument to another function This
        technique allows a function to call another function
        <br />
        <br />
        <span style={{ color: "skyblue" }}>
          A callback function can run after another function has finished.
        </span>
        <br />
      </p>
      <p style={{ color: "skyblue" }}> For Example :- </p>
      <button className="btn" onClick={() => SetDisplayCode(!displayCode)}>
        {!displayCode ? `Show Example` : `Hide Example`}
      </button>
      {displayCode && (
        <div className="Code" style={{ marginTop: "20px" }}>
          <CopyBlock
            language={"go"}
            text={callbackSnippet}
            codeBlock
            theme={dracula}
            showLineNumbers={true}
          />
        </div>
      )}

      <p>
        Callbacks are a great way to handle something after something else has
        been completed. By something here we mean a function execution. If we
        want to execute a function right after the return of some other
        function, then callbacks can be used.
      </p>

      <CopyBlock
        language={"go"}
        text={callbackSnippetTwo}
        codeBlock
        theme={dracula}
        showLineNumbers={true}
      />
    </div>
  );
}
