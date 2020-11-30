import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let Userpage = (props) => {
  console.log("props", props.links.length);
  if (props.links.length !== 1) {
    return (
      <div>
        {props.links
          ? props.links.map((item, idx) => {
              return <div key={idx}>{item.links}</div>;
            })
          : ""}
      </div>
    );
  } else {
    return <div>Incorrect Username or password</div>;
  }
};

export default Userpage;
