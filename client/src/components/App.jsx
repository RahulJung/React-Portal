import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="signUp">
          <h1>Sign Up</h1>
          <label>User</label>
          <input typr="text"></input>
          <label>Password</label>
          <input typr="password"></input>
          <button>Sign Up</button>
        </div>
        <div className="logIn">
          <h1>Log In</h1>
          <label>User</label>
          <input typr="text"></input>
          <label>Password</label>
          <input typr="password"></input>
          <button>Log In</button>
        </div>
      </div>
    );
  }
}

export default App;
