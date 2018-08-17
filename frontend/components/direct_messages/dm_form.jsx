import React from 'react';
import { Link } from 'react-router-dom';
import SelectedUsersListItem from './selected_users_list_item';

class DMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "", users: [] };

    this.update = this.update.bind(this);
    this.matches = this.matches.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.userSearch.focus();
  }

  update(e) {
    this.setState({searchInput: e.target.value});
  }

  matches() {
    const matches = [];

    if( this.state.searchInput.length === 0) {
      return this.props.users;
    }

    this.props.users.map( (user) => {
      const sub = user.username.slice(0, this.state.searchInput.length);

      if( sub.toLowerCase() === this.state.searchInput.toLowerCase()) {
        matches.push(user);

        return (
          <li>
            <button className="matched-user"
              onClick={this.selectName(user.id)}>
              {user.username}
            </button>
          </li>
        );
      }
    });

    if( matches.length === 0) {
      matches.push('No users match your search');
    }
  }

  selectName(userId) {
    return e => {
      const username = e.target.innerText;
      const user = this.props.allUsers[userId];

      let oldUsers = this.state.users;
      oldUsers.push(user);
      this.setState( {users: oldUsers} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state.users).then( () => {
      this.props.history.push('/workspace');
    });
  }

  //using same html classNames as the create channel form so styling is same
  render() {
    return (
      <div className="channel">
        <Link className="x-button" to="/workspace">&times;</Link>
        <h1 className="form-title">Create Direct Message</h1>

        <form className="channel-form" onSubmit={this.handleSubmit}>
          <input type="text"
                 className="user-search-input"
                 onChange={this.update}
                 value={this.state.searchInput}
                 placeholder="Search Users"
                 ref={(input) => { this.userSearch = input; }}>
          </input>

          <ul className="user-matches-ul">
            {this.matches}
          </ul>

          <div className="channel-form-buttons">
            <Link className="cancel-button" to="/workspace">Cancel</Link>

            <button
              className="submit-button"
              disabled={!!this.state.users}>
              Go
            </button>
          </div>
        </form>
      </div>
    );
  }

}

import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { selectChannel } from '../../actions/session_actions';

const mapStateToProps = ({ entities }) => ({
  allUsers: entities.users
});

const mapDispatchToProps = dispatch => {
  return {
    createChannel: payload => dispatch( createChannel(payload) ),
    selectChannel: id => dispatch( selectChannel(id) )
  };
};

export default connect(null,mapDispatchToProps)(DMForm);
