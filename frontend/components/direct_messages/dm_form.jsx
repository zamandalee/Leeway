import React from 'react';
import { Link } from 'react-router-dom';

class DMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "", selected: false, selectedUsers: {[this.props.currentUserId]: { user: this.props.currentUser }} };

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

    // const selected = this.state.selected ? "user-select-x-button" : "";

    return (
      Object.values(this.props.allUsers).map( (user, idx) => {
        const sub = user.username.slice(0, this.state.searchInput.length);
        // const symbol = this.state.selectedUsers[user.id] === undefined ? "" : "&times;";

        if( sub.toLowerCase() === this.state.searchInput.toLowerCase() && user.id !== this.props.currentUserId) {
          return (
            <li key={idx}>
              <div className="matched-user">
                <div><img src={user.photoUrl}/></div>
                <div>
                  <button className="user-match-select"
                    onClick={this.clickUsername(user.id)}
                    disabled={Object.values(this.state.selectedUsers).length === 9}>
                    <div>{user.username}</div>
                    {this.selectedSymbol(user.id)}
                  </button>
                </div>
              </div>
            </li>
          );
        }

      })
    );
  }

  selectedSymbol(userId) {
      if( this.state.selectedUsers[userId] === undefined ) {
        return "";
      } else {
        return <div className="user-select-x-button">&times;</div>;
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
        this.setState( {selectedUsers: oldUsers} );
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel({ title: this.state.selectedUsers, is_dm: true }).then( () => {
      this.props.history.push('/workspace');
    });
  }

  testing() {
    console.log("clicked");
  }


  //using same html classNames as the create channel form so styling is same
  render() {
    return (
      <div className="dm-create-container">
        <Link className="x-button" to="/workspace">&times;</Link>
        <h1 className="form-title">Create Direct Message</h1>
        <p>Note: group direct messages may have up to 9 total members.</p>

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
              onClick={this.testing}
              className="dm-submit-button"
              disabled={Object.values(this.state.selectedUsers).length < 2}>
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
