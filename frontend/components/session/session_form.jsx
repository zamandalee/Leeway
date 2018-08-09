import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../splash/header_container';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSumbit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  alternateAuth() {
    if(this.props.formType === 'Sign Up') {
      return (
        <div className="alternate-auth">
          Already have an account? <Link className="alt-auth-link" to='/login'>Sign in</Link>.
        </div>
      );
    } else {
      return (
        <div className="alternate-auth">
          Don't have an account? <Link className="alt-auth-link" to='/signup'>Sign up</Link>.
        </div>
      );
    }
  }

  render() {
    return (
      <div className="auth-page">
        <div className="header"><HeaderContainer /></div>

        <div className="session-form">
          <h1>{this.props.formHeader}</h1>

          <form onSumbit={this.handleSumbit}>
            <p>Enter your username and password.</p>
            <input
              className="auth-credentials"
              onChange={this.update('username')}
              value={this.state.username}
              placeholder="hermione_granger">
            </input>
            <br></br>
            <br></br>
            <input
              className="auth-credentials"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="password">
            </input>

            <button>{this.props.formType}</button>
          </form>

          {this.alternateAuth()}
        </div>

      </div>

    );
  }
}

export default SessionForm;
