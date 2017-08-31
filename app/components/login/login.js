import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  constructUserObject() {
    const user = {
      email: this.state.email.toLowerCase(),
      password: this.state.password.toLowerCase()
    };
    this.props.handleLoginSubmit(user);

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    const { handleLoginSubmit } = this.props;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.constructUserObject();
          }}
        >
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
