import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      adminRole: "",
      password: "",
      links: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    axios
      .post("/users/register", {
        userName: this.state.userName,
        adminRole: this.state.adminRole,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({
          userName: "",
          adminRole: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log("Error posting reviews in Client", err);
      });
  }

  render() {
    return (
      <div>
        <div className="form">
          <h2>Register User</h2>
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
            <div className="userName">
              <label>Admin Role</label>
              <input
                name="adminRole"
                placeholder="Enter your role"
                value={this.adminRole}
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

            <button className="reviewBtn" onClick={this.submitHandler}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="back">
          <Link to="/">
            <span className="links">Back To Login</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
