import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { clearModal } from '../../actions/modal_actions';
import ChannelForm from './channel_form';

const mapStateToProps = state => {
    title: '',
    private: false,
    formType: 'Create Channel'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: channel => dispatch( createChannel(channel) ),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelForm);
