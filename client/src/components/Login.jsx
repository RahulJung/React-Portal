import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomizedDialogs from "./CustomizedDialogs.jsx";
import Success from "./Success.jsx";
import Userpage from "./Userpage.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      adminRole: "",
      password: "",
      links: "",
    };
    this.getLinks = this.getLinks.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDuserNameMount() {
    this.getLinks();
  }

  getLinks(e) {
    e.preventDefault();
    console.log("CLicked me", this.state.userName);
    axios
      .get(`users/home/${this.state.userName}`)
      .then((res) => {
        console.log("from axios get request: ", res.data);
        this.setState({
          links: res.data,
        });
      })
      .catch((err) => {
        console.log("Error getitng the data React", err);
      });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="form">
          <h2>Admin Login</h2>
          <div className="innerForm">
            <div className="userName">
              <label>User Name</label>
              <input
                name="userName"
                placeholder="Login with your username"
                value={this.userName}
                onChange={this.changeHandler}
              />
            </div>
            <div className="pwd">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Login with your password"
                value={this.password}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <button className="reviewBtn" onClick={this.getLinks}>
              Log In
            </button>
          </div>
        </div>
        <div className="back">
          <Link to="/Register">
            <span className="link">Create Account</span>
          </Link>
        </div>
        {/* <Userpage links={this.state.links} /> */}
        {/* <CustomizedDialogs reviews={this.state.links} /> */}
        <Success links={this.state.links} />
      </div>
    );
  }
}

export default Login;
