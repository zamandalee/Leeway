import React from 'react';
import ChannelList from '../channel/channel_list';
import { fetchChannels } from '../../actions/channel_actions';

class IndexSidebar extends React.Component {
    componentDidMount() {
        this.props.fetchChannels();
    }

    render() {
        return (
            <div className="index-col">
              <div className="general-sidebar">
                  <h1>Hogwarts</h1>
                  <h2>{this.props.currentUser.username}</h2>
                  <button className="index-logout-button" onClick={this.props.logout}>Logout</button>
              </div>
              <ChannelList />
            </div>
        );
    }
}


import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexSidebar);
