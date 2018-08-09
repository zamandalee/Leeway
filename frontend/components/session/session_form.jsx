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
    this.props.processForm(this.state);
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

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  //Rails way to autofocus: have cursor automatically in input
  componentDidMount() {
    this.usernameInput.focus();
  }

  render() {
    return (
      <div className="session">
        <div className="header"><HeaderContainer /></div>

        <div className="session-form">
          <h1>{this.props.formHeader}</h1>

          {this.renderErrors()}

          <form onSubmit={this.handleSumbit}>
            <p>Enter your username and password.</p>
            <input
              className="auth-credentials"
              onChange={this.update('username')}
              value={this.state.username}
              placeholder="harry_potter"
              ref={(input) => { this.usernameInput = input; }} />

            <input
              className="auth-credentials"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="password" />

            <input className="session-submit" type="submit" value={this.props.formType} />
          </form>

          {this.alternateAuth()}
        </div>

      </div>

    );
  }
}

export default SessionForm;
