import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      adminRole: "",
      password: "",
      links: "",
    };
    this.getLinks = this.getLinks.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDuserNameMount() {
    this.getLinks();
  }

  // getMessage() {
  //   axios
  //     .get("/hello")
  //     .then((res) => {
  //       this.setState({
  //         message: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error getting message from the server");
  //     });
  // }

  getLinks(userName = this.state.userName) {
    axios
      .get(`users/home/${userName}`)
      .then((res) => {
        console.log("from axios get request: ", res.data);
        this.setState({
          links: res.data,
        });
      })
      .catch((err) => {
        console.log("Error getitng the data", err);
      });
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
      // .then(() => this.getLinks(this.state.userName))
      // Clear the form once the form is submitted
      // eslint-disable-next-line no-unused-vars
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
    console.log("this is state", this.state);
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <label>User Name</label>
          <input
            name="userName"
            placeholder="Choose a username"
            value={this.userName}
            onChange={this.changeHandler}
          />
          <label>Admin Role</label>
          <input
            name="adminRole"
            placeholder="Enter your role"
            value={this.adminRole}
            onChange={this.changeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.password}
            placeholder="Choose a password"
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Sign Up</button>
        </form>
        <form onSubmit={this.getLinks}>
          <label>User Name</label>
          <input
            name="userName"
            placeholder="Login with your username"
            value={this.userName}
            onChange={this.changeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Login with your password"
            value={this.password}
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default App;
