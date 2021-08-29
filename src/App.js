import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IIFE from "./Iife";
import Scope from "./Scope";
import AsyncAwait from "./AsyncAwait";
import Clousers from "./Clousers";
import Hoisting from "./Hoisting";
import Callbacks from "./Callbacks";
import Promises from "./Promises";

export default function App() {
  const [currentChap, SetCurrentChap] = useState(0);
  const [Topics, SetTopics] = useState([
    "Scope",
    "IIEF",
    "Hoisting",
    "Clousers",
    "Callbacks",
    "Promises",
    "AsyncAwait"
  ]);
  /** navigate through chapters */
  const moveNextChap = (currentChap) => {
    const ToTalTopics = Topics.length;
    if (currentChap < ToTalTopics - 1) {
      SetCurrentChap(currentChap + 1);
    } else if (currentChap === ToTalTopics - 1) {
      SetCurrentChap(0);
    }
  };

  const getTopicName = Topics[currentChap];
  const getTopicLink = getTopicName ? "/" + getTopicName.toLowerCase() : "";
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
        <br />
        <br />
        <br />

        <Link
          style={{ marginTop: "100px" }}
          className="btn"
          onClick={() => moveNextChap(currentChap)}
          to={getTopicLink ? getTopicLink : "/"}
        >
          Unlock Topic ({getTopicName})
        </Link>
      </Router>
    </div>
  );
}
