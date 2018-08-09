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

  componentDidMount() {
    this.usernameInput.focus();  //Rails way to autofocus: have cursor automatically in input
    this.props.receiveErrors([]);
  }


  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSumbit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then( () => {
      this.props.history.push('/workspace');
    });
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
    if(this.props.errors.length > 0) {
      return(
        <div className="errors">
          <img id="error-img" src={window.images.erroricon} />
          <ul className="errors-ul">
            {this.props.errors.map((error, idx) => (
              <li key={idx}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  demoButton() {
    if(this.props.formType === 'Log In') {
      return (
        <input
          className="demo-button"
          type="submit"
          value="Guest Login"
          onClick={ () => this.setState({username: 'harry_potter', password: '123456'}) } />
      );
    }
  }

  render() {
    return (
      <div className="session">
        <div className="header"><HeaderContainer /></div>

        {this.renderErrors()}

        <div className="session-form">
          <h1>{this.props.formHeader}</h1>


          <form onSubmit={this.handleSumbit}>
            <p>Enter your username and password.</p>
            <input
              type="text"
              className="auth-credentials"
              onChange={this.update('username')}
              value={this.state.username}
              placeholder="harry_potter"
              ref={(input) => { this.usernameInput = input; }}
              />

            <input
              type="password"
              className="auth-credentials"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="password" />


            <input className="session-submit" type="submit" value={this.props.formType} />
            {this.demoButton()}
          </form>

          {this.alternateAuth()}
        </div>

      </div>

    );
  }
}

export default SessionForm;
