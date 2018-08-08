import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  alternateAuth() {
    if(this.props.formType === 'Sign up for') {
      return (
        <div className="alternate-auth">
          Already have an account? <Link to='/login'>Sign in</Link>.
        </div>
      );
    } else {
      return (
        <div className="alternate-auth">
          Don't have an account? <Link to='/signup'>Sign up</Link>.
        </div>
      );
    }
  }

  render() {
    return (
      <div className="session-form">
        <h1>{this.props.formType} Leeway</h1>

        <form onSumbit={this.handleSumbit}>
          <p>Enter your username and password.</p>
          <input
            onChange={this.update('username')}
            value={this.state.username}
            placeholder="hermione_granger">
          </input>

          <input
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="password">
          </input>

          <button>Sign up</button>
        </form>

        {this.alternateAuth()}

      </div>

    );
  }
}

export default SessionForm;
