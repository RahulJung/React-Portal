import React from "react";
import CustomizedDialogs from "./CustomizedDialogs.jsx";

let Success = (props) => {
  console.log("props", props.links.length);
  if (props.links.length !== 1) {
    return (
      <div>
        {props.links ? (
          <div className="Success">
            <div>Success</div>
            <CustomizedDialogs reviews={props.links} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return <div className="Success">Incorrect Username or Password</div>;
  }
};

export default Success;
