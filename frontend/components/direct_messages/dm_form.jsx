import React from 'react';
import { Link } from 'react-router-dom';

class DMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "", selectedUsers: {[this.props.currentUserId]: { user: this.props.currentUser }} };

    this.update = this.update.bind(this);
    this.matches = this.matches.bind(this);
    this.selectedSymbol = this.selectedSymbol.bind(this);
    this.clickUsername = this.clickUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.userSearch.focus();
    this.props.fetchUsers();
    this.props.fetchChannels();
  }

  update(e) {
    this.setState({searchInput: e.target.value});
  }

  matches() {
    // const matches = [];

    // if( this.state.searchInput.length === 0) {
    //   return this.props.users;
    // }
    console.log("PROPS", this.props);
    return (
      Object.values(this.props.allUsers).map( (user, idx) => {
        const sub = user.username.slice(0, this.state.searchInput.length);

        if( sub.toLowerCase() === this.state.searchInput.toLowerCase()) {
          // matches.push(user);

          return (
            <li key={idx}>
              <button className="matched-user"
                onClick={this.clickUsername(user.id)}>
                {user.username} {`${this.selectedSymbol(user.id)}`}
              </button>
            </li>
          );

        }
      })
    );

    // if( matches.length === 0) {
      // matches.push('No users match your search');
    // }
  }

  selectedSymbol(userId) {
      //not selected
      if( this.state.selectedUsers[userId] === undefined ) {
        return "";
      } else {
        return "&times;";
      }
  }

  clickUsername(userId) {
    return e => {
      e.preventDefault();

      const user = this.props.allUsers[userId];
      let oldUsers = this.state.selectedUsers;

      //not selected
      if( this.state.selectedUsers[userId] === undefined ) {
        oldUsers[userId] = {user};
        this.setState( {selectedUsers: oldUsers} );
      } else {
        delete oldUsers[userId];
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel({ title: this.state.selectedUsers, is_dm: true }).then( () => {
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
            {this.matches()}
          </ul>

          <div className="channel-form-buttons">
            <Link className="cancel-button" to="/workspace">Cancel</Link>

            <button
              className="submit-button"
              disabled={this.state.selectedUsers.length > 1}>
              Go
            </button>
          </div>
        </form>
      </div>
    );
  }

}

import { connect } from 'react-redux';
import { createChannel, fetchChannels } from '../../actions/channel_actions';
import { selectChannel } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({ entities, session }) => {
  return({
    currentUserId: session.id,
    currentUser: entities.users[session.id],
    allUsers: entities.users
  });
};

const mapDispatchToProps = dispatch => {
  return {
    createChannel: payload => dispatch( createChannel(payload) ),
    selectChannel: id => dispatch( selectChannel(id) ),
    fetchUsers: () => dispatch( fetchUsers() ),
    fetchChannels: () => dispatch( fetchChannels() )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(DMForm);
