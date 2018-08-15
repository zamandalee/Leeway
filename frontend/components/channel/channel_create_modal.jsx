import React from 'react';

// import SearchableUserList from '../forms/searchable_user_list_container';

import { connect } from 'react-redux';

import ChannelCreateModal from './channel_create_modal';
import { createChannel } from '../../actions/channel_actions';
import { clearModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    name: '',
    description: '',
    private: false,
    formType: 'Create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: (channel, userIds) => dispatch(createChannel(channel, userIds)),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelFormModal);
