import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Body/Detail";

const App = () => {
  const [state, setState] = useState([]);
  const [curPerson, setCurPerson] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav></Nav>
          <Body people={state} setCurPerson={setCurPerson}></Body>
        </Route>
        <Route path="/user/:id">
          <Detail curPerson={curPerson} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
