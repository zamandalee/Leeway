import React from 'react';

class UserSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchInput: "", users: []};
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  usernames(users) {
    users.map( (user) => (

    ))
  }

  matches() {
    const matches = [];
    if( this.state.searchInput.length === 0 ) {
    }
  }

  render() {
    return (
      <h2>Members</h2>
      <ul className="dm-member-ul">
        {
          this.state.users.map( (user, idx) => (
            <li key={idx}>{user.username}</li>
          ))
        }
      </ul>

      <input
        type="text"
        className="user-search-input"
        onChange={this.update("title")}
        value={this.state.title}
        placeholder="Search Users"
        ref={(input) => { this.titleInput = input; }}
        />
    )
  }


}
