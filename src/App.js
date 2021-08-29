import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";

import { CopyBlock, dracula } from "react-code-blocks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IIFE from "./Iife";
import Scope from "./Scope";
import AsyncAwait from "./AsyncAwait";
import Clousers from "./Clousers";
import Hoisting from "./Hoisting";
import Callbacks from "./Callbacks";
import Promises from "./Promises";

export default function App() {
  const [firstValue, SetFirstValue] = React.useState("");
  const [displayCode, SetDisplayCode] = React.useState(false);
  //IIFE
  const Topics = [
    "Scope",
    "IIEF",
    "Hoisting",
    "Clousers",
    "Callbacks",
    "Promises",
    "AsyncAwait"
  ];

  return (
    <div className="App">
      <Router>
        <div>
          <h2 style={{ color: "skyblue", border: "1px solid skyblue" }}>
            JavaScript important Topics
          </h2>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center"
              //width: "50px"
            }}
          >
            <ul>
              {Topics.map((topic, index) => (
                <li className="topicList" key={index}>
                  <Link
                    style={{ color: "skyblue", paddingTop: "20px" }}
                    to={"/" + topic.toLowerCase()}
                  >
                    {" "}
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/iife">
              <IIFE />
            </Route>
            <Route path="/asyncawait">
              <AsyncAwait />
            </Route>
            <Route path="/clousers">
              <Clousers />
            </Route>
            <Route path="/callbacks">
              <Callbacks />
            </Route>
            <Route path="/hoisting">
              <Hoisting />
            </Route>
            <Route path="/promises">
              <Promises />
            </Route>
            <Route path="/promises">
              <Scope />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
