import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { selectChannel } from '../../actions/session_actions';
import ChannelForm from './channel_form';

const mapStateToProps = state => {
  return {
    title: '',
    private: false,
    formType: 'Create Channel'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: channel => dispatch( createChannel(channel) ),
    selectChannel: id => dispatch( selectChannel(id) )
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelForm);
