import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let Userpage = (props) => {
  console.log("props from Userpage", props);
  if (props.links.length !== 1) {
    return (
      <div className="x">
        {props.links
          ? props.links.map((item, idx) => {
              return (
                <div key={idx} className="y">
                  <a href="#">{item.links}</a>
                </div>
              );
            })
          : ""}
      </div>
    );
  } else {
    return <div>Incorrect Username or password</div>;
  }
};

export default Userpage;
