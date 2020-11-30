import React from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import "../styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userpage from "./Userpage.jsx";

let App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/home" exact component={Userpage} />
      </Switch>
    </Router>
  );
};

export default App;
