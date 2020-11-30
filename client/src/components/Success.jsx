import React from "react";
import Userpage from "./Userpage.jsx";
import CustomizedDialogs from "./CustomizedDialogs.jsx";
import { Link } from "react-router-dom";

let Success = (props) => {
  console.log("props", props.links.length);
  if (props.links.length !== 1) {
    return (
      <div>
        {props.links ? (
          <div>
            <div>Success</div>
            <CustomizedDialogs reviews={props.links} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return <div>Incorrect Username or Password</div>;
  }
};

export default Success;
